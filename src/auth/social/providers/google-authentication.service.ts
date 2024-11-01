import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import jwtConfig from 'src/auth/config/jwt.config';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import { UsersService } from 'src/users/providers/users.service';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;
  constructor(
    /**
     * Inject jwtConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    /**
     * Inject usersService
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    /**
     * Inject generateTokenProvider
     */
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}
  onModuleInit() {
    const clientId = this.jwtConfiguration.googleClientId;
    const clientSecret = this.jwtConfiguration.googleClientSecret;
    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(googleTokenDto: GoogleTokenDto) {
    try {
      // verify the google token sent by user
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: googleTokenDto.token,
      });

      // extract payload from google JWT
      const {
        email,
        sub: googleId,
        given_name: firstName,
        family_name: lastName,
      } = loginTicket.getPayload();

      // Find the user in the db using google id
      const user = await this.usersService.findOndByGoogleId(googleId);

      // id googleId exists generate token and refresh
      if (user) {
        return this.generateTokensProvider.generateTokens(user);
      }

      // if googleId does exist in db create a new user and then generate tokens
      const newUser = await this.usersService.createGooglgeUser({
        email: email,
        firstName: firstName,
        lastName: lastName,
        googleId: googleId,
      });
      return this.generateTokensProvider.generateTokens(newUser);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
