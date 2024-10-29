import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../user.entity';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    /**
     * Inject datasource
     */
    private readonly dataSource: DataSource,
  ) {}
  public async createMany(createManyUsersDTO: CreateManyUsersDto) {
    let newUsers: User[] = [];

    //Query runner
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      //Connect Query runner
      await queryRunner.connect();
      //Start Transation
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException('Could not connect to the database');
    }

    try {
      for (let user of createManyUsersDTO.users) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }

      //If Successfull commit
      await queryRunner.commitTransaction();
    } catch (error) {
      //If Unseccessful rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Cound not complete the transaction', {
        description: String(error),
      });
    } finally {
      //Release connection
      try {
        await queryRunner.release();
      } catch (error) {
        throw new RequestTimeoutException('Cound not release the connection', {
          description: String(error),
        });
      }
    }
    return {
      users: newUsers,
    };
  }
}
