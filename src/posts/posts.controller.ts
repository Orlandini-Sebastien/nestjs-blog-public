import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

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
    // return this.postsService.createPost(userId, createPostDto);
    console.log(createPostDto);
  }

  @Patch()
  @ApiOperation({ summary: 'Updates an existing post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated',
  })
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
