import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { GenerateTokensProvider } from './generate-tokens.provider';
import { UsersService } from 'src/users/providers/users.service';
import { ActiveUserData } from '../interfaces/active-user-data.interface';

@Injectable()
export class RefreshTokensProvider {
  constructor(
    /**
     * Inject jwtConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,

    /**
     * Injecting jwtService
     */
    private readonly jwtService: JwtService,
    /**
     * Inject GenerateTokenProvider
     */
    private readonly generateTokenProvider: GenerateTokensProvider,

    /**
     * Inject usersService
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public async refreshToken(refreshTokenDto: RefreshTokenDto) {
    try {
      // verify the refresh token using jwtService
      const { sub } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'>
      >(refreshTokenDto.refreshToken, {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      });

      // Fetch user from the db
      const user = await this.usersService.findOnById(sub);

      //Generate the Token
      return await this.generateTokenProvider.generateTokens(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
