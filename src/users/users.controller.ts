import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Req,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

// import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  //Ici on prend tout les params
  // public getUsers(@Param() params: any, @Query() query: any) {
  //Ici on prend uniquement le params id
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(limit);
    // console.log(page);

    return 'You set a get request to users endpoint';
  }

  @Post()
  //pas besoin de prendre ici @Req request;Request qui donne bien trops d'élément
  // inutile ici
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    // @Headers() headers: any,
    // @Ip() ip: any,
  ) {
    console.log(
      'users controller POST / createUserDTO is not a CreateUserDTO type >>>',
      createUserDto instanceof CreateUserDto,
    );
    // console.log(headers);
    // console.log(ip); // Pour obtenir l'adresse IP !!

    return 'You set a post request to users endpoint';
  }
}
