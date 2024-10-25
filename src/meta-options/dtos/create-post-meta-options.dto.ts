import { IsJSON, IsNotEmpty } from 'class-validator';

/**
 * DTO for creating Meta options.
 * Used to validate incoming data for creating a `MetaOption`.
 *
 * @export
 * @class CreatePostMetaOptionsDto
 */
export class CreatePostMetaOptionsDto {
  /**
   * JSON value of the Meta option.
   * This property is required and must be in valid JSON format.
   *
   * @type {string}
   * @memberof CreatePostMetaOptionsDto
   */
  @IsNotEmpty() // Ensures the field is not empty
  @IsJSON() // Validates that the value is in valid JSON format
  metaValue: string;
}
