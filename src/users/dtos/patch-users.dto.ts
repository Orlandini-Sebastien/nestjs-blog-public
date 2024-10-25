import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

/**
 * Data transfer object (DTO) for updating user properties.
 * This class extends `CreateUserDto`, allowing partial updates on user fields.
 * Intended for patch operations to update existing user information.
 *
 * @export
 * @class PatchUserDto
 * @extends {PartialType(CreateUserDto)}
 */
export class PatchUserDto extends PartialType(CreateUserDto) {
  /**
   * Unique identifier for the user to be updated.
   * Required for specifying which user should receive the updates.
   *
   * @type {number}
   * @memberof PatchUserDto
   */
  @ApiProperty({
    description: 'The ID of the user that needs to be updated',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
