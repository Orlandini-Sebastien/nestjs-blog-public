import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Service responsible for handling business operations related to users.
 * @class UsersService
 */
@Injectable()
export class UsersService {
  /**
   * Creates an instance of the `UsersService`.
   * It uses dependency injection for the authentication service with `forwardRef`
   * to prevent circular dependencies.
   *
   * @param {AuthService} authService - The injected authentication service.
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Retrieves a list of users (mocked).
   * This method simulates a connection to a database and returns a mock list of users.
   *
   * @param {GetUsersParamDto} getUsersParamDto - Parameters for filtering users.
   * @param {number} limit - Maximum number of users to return.
   * @param {number} page - Page number for pagination.
   * @returns {Array<Object>} A list of users containing their first name and email.
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ): Array<{ firstName: string; email: string }> {
    // Check if the user is authenticated using the authentication service.
    const isAuth = this.authService.isAuth();
    console.log('user.service >>>', isAuth);

    // Return a mock list of users.
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Seb',
        email: 'seb@doe.com',
      },
    ];
  }

  /**
   * Retrieves a user by their ID.
   * This method simulates searching for a user in a database by their ID.
   *
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Array<Object>} An array containing a user object with id, first name, and email.
   */
  public findOnById(
    id: string,
  ): Array<{ id: number; firstName: string; email: string }> {
    // Return a mock user with id, first name, and email.
    return [
      {
        id: 1234,
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }
}
