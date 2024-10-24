import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionSDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
