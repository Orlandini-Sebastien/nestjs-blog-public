import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    /**
     * Injecting usersRepository
     */
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
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
