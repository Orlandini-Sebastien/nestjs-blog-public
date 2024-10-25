import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsService } from './providers/meta-options.service';

/**
 * Module pour la gestion des options Meta.
 * Ce module gère l'injection des dépendances, incluant le contrôleur,
 * le service et l'entité `MetaOption`.
 *
 * @export
 * @class MetaOptionsModule
 */
@Module({
  /**
   * Contrôleurs de ce module, incluant le `MetaOptionsController`.
   */
  controllers: [MetaOptionsController],

  /**
   * Modules importés, incluant `TypeOrmModule` pour l'entité `MetaOption`.
   */
  imports: [TypeOrmModule.forFeature([MetaOption])],

  /**
   * Services fournis, incluant `MetaOptionsService`.
   */
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
