import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
  UseGuards,
  SetMetadata,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
    type: [CreateUserDto], // Assuming the return type is an array of CreateUserDto
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  // @SetMetadata('authType','None')
  @Auth(AuthType.None) // Donne la même chose que la ligne au dessus (custome décorateur)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary: 'Creates a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: CreateUserDto, // Assuming it returns the created user object
  })
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // @UseGuards(AccessTokenGuard)
  @Post('create-many')
  @ApiOperation({
    summary: 'Creates many users',
  })
  @ApiResponse({
    status: 201,
    description: 'Users created successfully',
    type: 'array', // Assuming it returns the created user object
  })
  public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
    return this.usersService.createMany(createManyUsersDto);
  }

  @Patch()
  @ApiOperation({
    summary: 'Updates an existing user',
  })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: CreateUserDto, // Assuming it returns the updated user object
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto; // Assurez-vous que cette méthode existe
  }
}
