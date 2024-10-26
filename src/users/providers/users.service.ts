import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

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

    /**
     * Injecting usersRepository
     */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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
   *
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Array<Object>} An array containing a user object with id, first name, and email.
   */
  public async findOnById(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  public async createUser(createUserDTO: CreateUserDto) {
    // Check is user exists with same email
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDTO.email,
      },
    });
    // Handle exception
    // Create a new user
    let newUser = this.usersRepository.create(createUserDTO);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }
}
