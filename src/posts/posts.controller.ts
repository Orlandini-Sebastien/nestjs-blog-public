import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsDto } from './dtos/get-posts.dto';

/**
 * PostsController manages operations related to posts.
 */
@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * Retrieves all posts, optionally filtered by user ID.
   *
   * @param userId - The ID of the user whose posts are to be retrieved (optional).
   * @returns An array of posts for the specified user or all posts if no user ID is provided.
   */
  @Get('/:userId?')
  @ApiOperation({ summary: 'Obtains all the posts' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully found',
  })
  public getPosts(
    @Param('userId') userId: string,
    @Query() postQuery: GetPostsDto,
  ) {
    console.log(postQuery);

    return this.postsService.findAll(postQuery, userId);
  }

  /**
   * Creates a new post for a specific user.
   *
   * @param userId - The ID of the user for whom the post is created.
   * @param createPostDto - The data transfer object containing post details.
   * @returns The newly created post (this should eventually return the post from the service).
   */
  @Post('/:userId')
  @ApiOperation({ summary: 'Creates a new post for a user' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  public createPost(
    @Param('userId') userId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postsService.create(createPostDto);
  }

  /**
   * Updates an existing post.
   *
   * @param patchPostsDto - The data transfer object containing updated post details.
   * @returns The updated post (this should eventually return the updated post from the service).
   */
  @Patch()
  @ApiOperation({ summary: 'Updates an existing post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated',
  })
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }

  @ApiOperation({ summary: 'Deletes an existing post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully deleted',
  })
  @ApiQuery({
    name: 'id',
    type: 'number',
    required: true,
    description: 'The id of entries you want to delete',
    example: 10,
  })
  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
