import {
  BadRequestException,
  Body,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { CreatePostProvider } from './create-post.provider';

/**
 * Service for handling posts-related operations.
 */
@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting the TagsServices
     */
    private readonly tagsService: TagsService,

    /**
     * Repository for managing Post entities.
     */
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    /**
     * Injecting paginationProvider
     */
    private readonly paginationProvider: PaginationProvider,

    /**
     * Inject CreatePost Provider
     */
    private readonly createPostProvider: CreatePostProvider,
  ) {}

  /**
   * Creating new posts
   */
  public async create(createPostDto: CreatePostDto, user: ActiveUserData) {
    return await this.createPostProvider.create(createPostDto, user);
  }

  /**
   * Retrieves all posts for a specific user.
   * @returns An array of posts with the user information.
   */
  public async findAll(
    postQuery: GetPostsDto,
    userId: string,
  ): Promise<Paginated<Post>> {
    // let posts = await this.postsRepository.find({
    //   relations: {
    //     metaOption: true,
    //     // author: true,
    //     // tags: true,
    //   },
    //   skip: (postQuery.page - 1) * postQuery.limit,
    //   take: postQuery.limit,
    // });
    let posts = await this.paginationProvider.paginationQuery(
      {
        limit: postQuery.limit,
        page: postQuery.page,
      },
      this.postsRepository,
    );
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

  /**
   * Update post with tags
   */
  public async update(patchPostDto: PatchPostDto) {
    // 1 Find first tags
    let tags = undefined;
    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
      );
    }

    /**
     * Number of tags need to be equal
     */
    if (!tags || tags.length !== patchPostDto.tags.length) {
      throw new BadRequestException(
        'Please check your tag Ids and ensure they are correct',
      );
    }
    // 2 Find the post
    let post = undefined;
    try {
      post = await this.postsRepository.findOneBy({ id: patchPostDto.id });
      if (!post) {
        throw new RequestTimeoutException(
          `Post with ID ${patchPostDto.id} not found`,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve the post');
    }

    if (!post) {
      throw new BadRequestException('The post Id does not exist');
    }

    // 3 update the properties
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;
    // 4 assign new tags
    post.tags = tags;

    // 5 Save & return
    try {
      return await this.postsRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException('Failed to save the updated post');
    }
  }
}
