import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Data transfer object (DTO) for retrieving users based on specific parameters.
 * Allows optional filtering by user ID when fetching user data.
 *
 * @export
 * @class GetUsersParamDto
 */
export class GetUsersParamDto {
  /**
   * Optional parameter to fetch a user by a specific ID.
   * If provided, only the user with this ID will be retrieved.
   *
   * @type {number}
   * @memberof GetUsersParamDto
   */
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 1234,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
