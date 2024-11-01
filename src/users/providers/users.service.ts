import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { GoogleUser } from '../interfaces/google-users.interface';

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
    private readonly usersRepository: Repository<User>,

    /**
     * Env
     */
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    /**
     * Inject usersCreateManyProvider
     */
    private readonly usersCreateManyProvider: UsersCreateManyProvider,

    /**
     * Inject createUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,

    /**
     * Inject findOneByEmailProvider
     */
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,
    /**
     * Inject findOneByGoogleIdProvider
     */
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,

    /**
     * Inject createGoogleUserProvider
     */
    private readonly createGoogleUserProvider: CreateGoogleUserProvider,
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
    // const isAuth = this.authService.isAuth();
    // console.log('user.service >>>', isAuth);

    //test
    console.log(this.profileConfiguration);

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
    let user = undefined;
    try {
      user = await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Error occurred while retrieving user by ID',
        {
          description: 'Database connection error',
        },
      );
    }
    /**
     * Handle the user not exist
     */
    if (!user) {
      throw new BadRequestException('The user id does not exist');
    }

    return user;
  }

  public async createUser(createUserDTO: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDTO);
  }

  public async createMany(createManyUsersDTO: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDTO);
  }

  public async findOneByEmail(email: string) {
    return await this.findOneUserByEmailProvider.findOneByEmail(email);
  }

  public async findOndByGoogleId(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGooglgeUser(googleUser: GoogleUser) {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
