import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Data transfer object (DTO) for creating a new tag.
 * Includes fields for tag information such as name, slug, description, schema, and featured image URL.
 *
 * @export
 * @class CreateTagDto
 */
export class CreateTagDto {
  /**
   * The name of the tag.
   * This field is required and must be between 3 and 256 characters.
   *
   * @type {string}
   * @memberof CreateTagDto
   */
  @ApiProperty({
    description: 'The name of the tag',
    example: 'Technology',
  })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  /**
   * Slug for the tag, used in the URL.
   * Should be in lowercase letters and can include hyphens, no spaces.
   *
   * @type {string}
   * @memberof CreateTagDto
   */
  @ApiProperty({
    description: 'Slug for the tag URL',
    example: 'first-post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: `A slug should be all small letters and use only '-' without spaces. For example: "my-url" `,
  })
  slug: string;

  /**
   * Optional description of the tag.
   * Allows a brief explanation or details about the tag.
   *
   * @type {string}
   * @memberof CreateTagDto
   */
  @ApiPropertyOptional({
    description: 'Optional description of the tag',
    example: 'A tag for tech-related posts',
  })
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * Optional JSON schema for the tag, useful for additional tag metadata.
   * Must be in JSON format if provided.
   *
   * @type {string}
   * @memberof CreateTagDto
   */
  @ApiPropertyOptional({
    description: 'Optional JSON schema for the tag metadata',
    example: '{"type": "object", "properties": { "property1": "value1" }}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  /**
   * Optional URL for the featured image associated with the tag.
   * Must be a valid URL and no more than 1024 characters.
   *
   * @type {string}
   * @memberof CreateTagDto
   */
  @ApiPropertyOptional({
    description: 'Optional URL for the featured image of the tag',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;
}
