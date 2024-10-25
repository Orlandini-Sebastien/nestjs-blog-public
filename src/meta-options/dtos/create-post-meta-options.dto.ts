import { IsJSON, IsNotEmpty } from 'class-validator';

/**
 * DTO pour la création des options Meta.
 * Utilisé pour valider les données reçues pour la création d'un `MetaOption`.
 *
 * @export
 * @class CreatePostMetaOptionsDto
 */
export class CreatePostMetaOptionsDto {
  /**
   * La valeur JSON de l'option Meta.
   * Cette propriété est requise et doit être au format JSON valide.
   *
   * @type {string}
   * @memberof CreatePostMetaOptionsDto
   */
  @IsNotEmpty() // Assure que le champ n'est pas vide
  @IsJSON() // Valide que la valeur est un JSON valide
  metaValue: string;
}
