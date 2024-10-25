import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

/**
 * Service de gestion des options Meta pour l'application.
 * Ce service est responsable de la création et de la gestion des instances `MetaOption`.
 *
 * @export
 * @class MetaOptionsService
 */
@Injectable()
export class MetaOptionsService {
  /**
   * Constructeur du service `MetaOptionsService`.
   *
   * @param {Repository<MetaOption>} metaOptionRepository - Repository injecté pour l'entité `MetaOption`.
   */
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  /**
   * Crée une nouvelle option Meta.
   *
   * @param {CreatePostMetaOptionsDto} createPostMetaOptionsDto - Données pour créer une nouvelle option Meta.
   * @returns {Promise<MetaOption>} L'instance `MetaOption` nouvellement créée.
   * @memberof MetaOptionsService
   */
  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto): Promise<MetaOption> {
    // Crée une nouvelle instance de MetaOption avec les données reçues.
    let newMetaOption = this.metaOptionRepository.create(createPostMetaOptionsDto);
    
    // Sauvegarde la nouvelle instance dans la base de données et la retourne.
    return await this.metaOptionRepository.save(newMetaOption);
  }
}
