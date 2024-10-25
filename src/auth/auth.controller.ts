import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

/**
 * AuthController handles authentication-related requests for the application.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
