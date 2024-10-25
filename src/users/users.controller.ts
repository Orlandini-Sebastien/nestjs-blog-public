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
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @ApiOperation({
    summary: 'Creates a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: CreateUserDto, // Assuming it returns the created user object
  })
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(
      'users controller POST / createUserDTO is not a CreateUserDTO type >>>',
      createUserDto instanceof CreateUserDto,
    );
    return this.usersService.createUser(createUserDto);
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
