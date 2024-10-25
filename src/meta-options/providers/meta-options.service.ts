import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

/**
 * Service for managing Meta options in the application.
 * This service is responsible for creating and managing `MetaOption` instances.
 *
 * @export
 * @class MetaOptionsService
 */
@Injectable()
export class MetaOptionsService {
  /**
   * Constructor for `MetaOptionsService`.
   *
   * @param {Repository<MetaOption>} metaOptionRepository - Injected repository for the `MetaOption` entity.
   */
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  /**
   * Creates a new Meta option.
   *
   * @param {CreatePostMetaOptionsDto} createPostMetaOptionsDto - Data for creating a new Meta option.
   * @returns {Promise<MetaOption>} The newly created `MetaOption` instance.
   * @memberof MetaOptionsService
   */
  public async create(
    createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOption> {
    // Creates a new MetaOption instance with the received data.
    let newMetaOption = this.metaOptionRepository.create(
      createPostMetaOptionsDto,
    );

    // Saves the new instance in the database and returns it.
    return await this.metaOptionRepository.save(newMetaOption);
  }
}
