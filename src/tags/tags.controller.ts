import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateTagDto } from './dtos/create-tags.dto';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(
    /**
     * Inject TagsService
     */
    private readonly tagsService: TagsService,
  ) {}

  /**
   * Creates a new tag with the provided details.
   * @param createTagDto The data transfer object containing tag details.
   * @returns The newly created tag.
   */
  @ApiOperation({
    summary: 'Creates one tag',
  })
  @ApiResponse({
    status: 201,
    description: 'Tag is successfully created',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. The input data is invalid.',
  })
  @ApiBody({
    type: CreateTagDto,
    description: 'Tag data needed for creation',
  })
  @Post()
  public createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  /**
   * Delete a tag
   * @param id - id of tag
   */
  @ApiOperation({
    summary: 'Deletes tag',
  })
  @ApiResponse({
    status: 200,
    description: '{deleted : true, id : id of the tag}',
  })
  @Delete()
  public async deleteTag(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.deleteTags(id);
  }

  /**
   * Soft Delete a tag
   * @param id - id of tag
   */
  @ApiOperation({
    summary: 'Soft Deletes tag',
  })
  @ApiResponse({
    status: 200,
    description: '{deleted : true, id : id of the tag}',
  })
  @Delete('soft-delete')
  public async softDeleteTag(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.softRemoveTags(id);
  }
}
