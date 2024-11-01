import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from 'src/tags/providers/tags.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';

import { CreatePostDto } from '../dtos/create-post.dto';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
import { Post } from '../post.entity';
@Injectable()
export class CreatePostProvider {
  constructor(
    /**
     * Injecting Users Services
     */
    private readonly usersService: UsersService,

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
     * Inject metaOptionsRepository
     */
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>,

    /**
     * Injecting paginationProvider
     */
    private readonly paginationProvider: PaginationProvider,
  ) {}
  /**
   * Creating new posts
   */
  public async create(createPostDto: CreatePostDto, user: ActiveUserData) {
    let author;
    let tags;

    try {
      // Find the author first
      author = await this.usersService.findOnById(user.sub);

      // Find tags and assign them to the `tags` variable
      tags = await this.tagsService.findMultipleTags(createPostDto.tags);
    } catch (error) {
      throw new ConflictException(error);
    }

    // Verify the tags length to ensure all tags exist
    if (createPostDto.tags.length !== tags.length) {
      throw new BadRequestException("please check your tag Ids'");
    }

    // Create metaOptions if provided
    let metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;

    try {
      if (metaOptions) {
        await this.metaOptionsRepository.save(metaOptions);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to save meta options');
    }

    // Create post with provided data, author, and tags
    const post = this.postsRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });

    // Assign metaOptions if they exist
    if (metaOptions) {
      post.metaOption = metaOptions;
    }

    try {
      // Save the post to the repository
      return await this.postsRepository.save(post);
    } catch (error) {
      throw new ConflictException(error, {
        description: 'Ensure post slug is unique and not duplicated',
      });
    }
  }
}
