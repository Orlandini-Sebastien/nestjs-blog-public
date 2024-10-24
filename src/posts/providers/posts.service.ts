import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findOnById(userId);
    return [
      {
        user: user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Title',
        content: 'Test Content',
      },
    ];
  }
  public createPost(userId: string, createPostDto: CreatePostDto) {
    return {
      author: userId,
      post: createPostDto,
    };
  }
}
