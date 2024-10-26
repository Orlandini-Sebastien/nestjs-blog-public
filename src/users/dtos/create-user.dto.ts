import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Data transfer object (DTO) for creating a new user.
 * Includes fields for user information such as first name, last name, email, and password.
 *
 * @export
 * @class CreateUserDto
 */
export class CreateUserDto {
  /**
   * First name of the user.
   * This field is required and must be between 3 and 96 characters.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description: 'First name of the user, required field.',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   * Last name of the user.
   * This field is optional and must be between 3 and 96 characters if provided.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description: 'Last name of the user, optional field.',
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  /**
   * Email address of the user.
   * Required field that must be a valid email format.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description:
      'Email address of the user, required field and must be in valid email format.',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Password for the user account.
   * Must be at least 11 characters long, including one letter, one number, and one special character.
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description:
      'Password for the user account, must be at least 11 characters, include one letter, one number, and one special character.',
    example: 'Password@123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{11,}$/, {
    message:
      'Minimum eleven characters, at least one letter, one number and one special character',
  })
  password: string;
}
