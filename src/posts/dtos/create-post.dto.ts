import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/status.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for creating a new post.
 * This class defines the structure of data required to create a post.
 */
export class CreatePostDto {
  /**
   * The title of the post.
   * Must be a string, cannot be empty, and must be between 4 and 512 characters long.
   */
  @ApiProperty({
    description: 'Give the title of your post',
    example: 'First post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  /**
   * The type of the post.
   * Must be an enum value from postType, cannot be empty.
   */
  @ApiProperty({
    description: 'Define the type of your post',
    example: 'post',
    enum: postType,
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  /**
   * The slug for the post URL.
   * Must be a string, cannot be empty, and must match the specified regex pattern.
   */
  @ApiProperty({
    description: 'Slug for the post URL',
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
   * The status of the post.
   * Must be an enum value from postStatus and cannot be empty.
   */
  @ApiProperty({
    description: 'Status of the post',
    example: 'draft',
    enum: postStatus,
  })
  @IsNotEmpty()
  @IsEnum(postStatus)
  status: postStatus;

  /**
   * The content of the post.
   * Optional field that can contain any string.
   */
  @ApiPropertyOptional({
    description: 'The content of the post',
    example: '<p>Your post content here</p>',
  })
  @IsString()
  @IsOptional()
  content?: string;

  /**
   * A JSON object for additional metadata related to the post.
   * Must be a valid JSON string and is optional.
   */
  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\r\n"@context": "https://schema.org",\r\n"@type": "Person",\r\n"name": "John Doe",\r\n"jobTitle": "Software Developer",\r\n"affiliation": {\r\n"@type": "Organization",\r\n"name": "Acme Inc."\r\n},\r\n"url": "https://johndoe.com",\r\n"sameAs": [\r\n"https://twitter.com/johndoe",\r\n"https://linkedin.com/in/johndoe"\r\n]\r\n}',
  })
  @IsJSON()
  @IsOptional()
  @MaxLength(1024)
  schema?: string;

  /**
   * The URL for the featured image of the post.
   * Must be a valid URL and is optional.
   */
  @ApiPropertyOptional({
    description: 'URL for the featured image',
    example: 'https://example.com/image.jpg',
  })
  @IsUrl()
  @IsOptional()
  featuredImageUrl?: string;

  /**
   * The publication date of the post.
   * Must be a valid ISO 8601 date string and is optional.
   */
  @ApiProperty({
    description: 'The date on which the blog post is published',
    example: '2024-10-23T14:30:00.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: string;

  /**
   * An array of tags related to the post.
   * Each tag must be a number, can be optional.
   */
  @ApiPropertyOptional({
    description: 'Array of ids of tags',
    example: [1, 2],
  })
  @IsOptional() // Tags can be optional
  @IsArray()
  @IsInt({ each: true }) // Each element of the array must be a string
  tags?: number[];

  /**
   * Additional meta options for the post.
   * This field is optional and may contain complex nested objects.
   */
  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example: '{"sidebarEnable":true}',
        },
      },
    },
    description: 'Additional meta options for the post',
    example: [{ key: 'author', value: 'John Doe' }],
  })
  @IsOptional() // Meta options can be optional
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto | null;

  /**
   * Each post must have one author
   */
  @ApiProperty({
    type: 'integer',
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
