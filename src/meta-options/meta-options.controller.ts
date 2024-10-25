import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
import { ApiTags } from '@nestjs/swagger';

/**
 * Controller for managing Meta options.
 * This controller handles the endpoints for creating new Meta options.
 *
 * @export
 * @class MetaOptionsController
 */
@ApiTags('meta-options')
@Controller('meta-options')
export class MetaOptionsController {
  /**
   * Constructor for the `MetaOptionsController`.
   *
   * @param {MetaOptionsService} metaOptionsService - Injected service for managing Meta options.
   */
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  /**
   * Creates a new Meta option.
   * HTTP POST endpoint to create a new Meta option with the provided data.
   *
   * @param {CreatePostMetaOptionsDto} createPostMetaOptionsDto - The data for the new Meta option.
   * @returns {Promise<MetaOption>} The newly created Meta option.
   * @memberof MetaOptionsController
   */
  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
