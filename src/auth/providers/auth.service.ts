import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * AuthService handles authentication logic, including user login and authentication checks.
 */
@Injectable()
export class AuthService {
  constructor(
    // Injects the UsersService using forward reference to resolve circular dependencies
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
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
  public login(email: string, password: string, id: string) {
    // Check if the user exists in the database
    const user = this.usersService.findOnById('1234');
    // Login logic would go here

    // Return a sample token
    return 'SAMPLE_TOKEN';
  }

  /**
   * Checks if the user is authenticated.
   *
   * @returns A boolean indicating whether the user is authenticated.
   */
  public isAuth() {
    return true;
  }
}
