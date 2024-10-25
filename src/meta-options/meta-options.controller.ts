import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

/**
 * Contrôleur pour gérer les options Meta.
 * Ce contrôleur permet de gérer les points de terminaison pour créer de nouvelles options Meta.
 *
 * @export
 * @class MetaOptionsController
 */
@Controller('meta-options')
export class MetaOptionsController {
  /**
   * Constructeur du contrôleur `MetaOptionsController`.
   *
   * @param {MetaOptionsService} metaOptionsService - Service injecté pour la gestion des options Meta.
   */
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  /**
   * Crée une nouvelle option Meta.
   * Point de terminaison HTTP POST pour créer une nouvelle option Meta avec les données fournies.
   *
   * @param {CreatePostMetaOptionsDto} createPostMetaOptionsDto - Les données pour la nouvelle option Meta.
   * @returns {Promise<MetaOption>} L'option Meta nouvellement créée.
   * @memberof MetaOptionsController
   */
  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
