import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tags.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../tag.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Inject TagsRepository
     */
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  /**
   * Create a new tag
   */
  public async create(createTagDto: CreateTagDto) {
    let tag = this.tagsRepository.create(createTagDto);
    tag = await this.tagsRepository.save(tag);
    return tag;
  }

  /**
   *  Find Multiple Tags
   * @param tags
   * @returns
   */
  public async findMultipleTags(tags: number[]) {
    let results = await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });
    return results;
  }

  /**
   * Delete tag
   * @param id
   * @returns
   */
  public async deleteTags(id: number) {
    let tag = await this.tagsRepository.delete(id);
    return {
      deleted: true,
      id,
    };
  }

  /**
   * Soft Remove tag
   * @param id
   * @returns
   */
  public async softRemoveTags(id: number) {
    let tag = await this.tagsRepository.softDelete(id);
    return {
      deleted: true,
      id,
    };
  }
}
