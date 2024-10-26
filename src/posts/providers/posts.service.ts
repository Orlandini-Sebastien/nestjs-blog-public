import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

/**
 * Service for handling posts-related operations.
 */
@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting Users Services
     */
    private readonly usersService: UsersService,

    /**
     * Repository for managing Post entities.
     */
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    /**
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>,
  ) {}

  /**
   * Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Find the author first
    let author = await this.usersService.findOnById(createPostDto.authorId);

    //Create metaOptions a revoir pour la cascade
    let metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }

    //Create post
    let post = this.postsRepository.create({
      ...createPostDto,
      author: author,
    });

    // Add metaOptions to the post
    if (metaOptions) {
      post.metaOption = metaOptions;
    }

    //return the post
    return await this.postsRepository.save(post);
  }

  /**
   * Retrieves all posts for a specific user.
   * @param userId - The ID of the user whose posts are to be retrieved.
   * @returns An array of posts with the user information.
   */
  public async findAll(userId: number) {
    const user = this.usersService.findOnById(userId);

    let posts = await this.postsRepository.find({
      relations: {
        metaOption: true,
        author: true,
      },
    });
    return posts;
  }

  /**
   * Delete post
   */
  public async delete(id: number) {
    await this.postsRepository.delete({ id });
    //confirm
    return { deleted: true, id };
  }
}
