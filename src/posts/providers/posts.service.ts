import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';

/**
 * Service for handling posts-related operations.
 */
@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    /**
     * Repository for managing Post entities.
     */
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  /**
   * Retrieves all posts for a specific user.
   * @param userId - The ID of the user whose posts are to be retrieved.
   * @returns An array of posts with the user information.
   */
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

  /**
   * Creates a new post for a specific user.
   * @param userId - The ID of the user creating the post.
   * @param createPostDto - The data transfer object containing post details.
   * @returns An object representing the newly created post.
   */
  public createPost(userId: string, createPostDto: CreatePostDto) {
    return {
      author: userId,
      post: createPostDto,
    };
  }
}
