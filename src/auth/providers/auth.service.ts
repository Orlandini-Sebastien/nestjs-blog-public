import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    //injected
    @Inject(forwardRef(()=>UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    // chek user exists datadase
    const user = this.usersService.findOnById('1234');
    // login

    // token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
