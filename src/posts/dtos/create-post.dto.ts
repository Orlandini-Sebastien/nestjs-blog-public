import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
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

export class CreatePostDto {
  @ApiProperty({
    description: 'Give the title of your post',
    example: 'First post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  @ApiProperty({
    description: 'Define the type of your post',
    example: 'post',
    enum: postType,
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

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

  @ApiProperty({
    description: 'Status of the post',
    example: 'draft',
    enum: postStatus,
  })
  @IsNotEmpty()
  @IsEnum(postStatus)
  status: postStatus;

  @ApiPropertyOptional({
    description: 'The content of the post',
    example: '<p>Your post content here</p>',
  })
  @IsString()
  @IsOptional()
  content?: string;

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

  @ApiPropertyOptional({
    description: 'URL for the featured image',
    example: 'https://example.com/image.jpg',
  })
  @IsUrl()
  @IsOptional()
  featuredImageUrl?: string;

  @ApiProperty({
    description: 'The date on which the blog post is published',
    example: '2024-10-23T14:30:00.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: string;

  @ApiPropertyOptional({
    description: 'Tags related to the post',
    example: ['nestjs', 'swagger'],
  })
  @IsArray()
  @IsString({ each: true }) // Chaque élément du tableau doit être une chaîne de caractères
  @IsOptional() // Les tags peuvent être optionnels
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifies for your meta option',
          example: 'sidebarEnable',
        },
        value: {
          type: 'any',
          description: 'Any value that you want to save to the key',
          example: true,
        },
      },
    },
    description: 'Additional meta options for the post',
    example: [{ key: 'author', value: 'John Doe' }],
  })
  @IsOptional() // Les meta options peuvent être optionnelles
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOption?: CreatePostMetaOptionsDto[];
}
