import { GoogleAuthenticationService } from './providers/google-authentication.service';
import { Body, Controller, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';

@Auth(AuthType.None)
@Controller('auth/google-authentication')
export class GoogleAuthenticationController {
  constructor(
    /**
     * Inject googleAuthenticationService
     */
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  async authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    console.log('Received token:', googleTokenDto.token);
    try {
      const result = await this.googleAuthenticationService.authenticate(
        googleTokenDto,
      );
      console.log('Authentication result:', result);
      return result;
    } catch (error) {
      console.error('Authentication error details:', error);
      throw error;
    }
  }
}
