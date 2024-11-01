import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';

/**
 * AuthService handles authentication logic, including user login and authentication checks.
 */
@Injectable()
export class AuthService {
  constructor(
    /**
     * Injects the UsersService using forward reference to resolve circular dependencies
     */

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    /**
     * Inject signInProvider
     */
    private readonly signInProvider: SignInProvider,

    /**
     * Inject refreshTokenProvider
     */
    private readonly refreshTokenProvider: RefreshTokensProvider,
  ) {}

  /**
   * Logs in a user with the given email, password, and ID.
   * Checks if the user exists in the database before proceeding.
   *
   * @param email - The email of the user attempting to log in.
   * @param password - The password provided by the user.
   * @param id - The ID of the user attempting to log in.
   * @returns A sample token if the login is successful.
   */
  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  public async refreshToken(refreshTokenDto: RefreshTokenDto) {
    return await this.refreshTokenProvider.refreshToken(refreshTokenDto);
  }
}
