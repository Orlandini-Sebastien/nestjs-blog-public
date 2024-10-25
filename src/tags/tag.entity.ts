import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Represents a Tag entity, containing metadata for tags used in the system.
 * Includes fields such as name, slug, description, schema, and timestamps.
 *
 * @export
 * @class Tag
 */
@Entity()
export class Tag {
  /**
   * Unique identifier for the tag.
   * This value is auto-generated and serves as the primary key.
   *
   * @type {number}
   * @memberof Tag
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Name of the tag, required and must be unique.
   * Used to identify the tag within the system.
   *
   * @type {string}
   * @memberof Tag
   */
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  name: string;

  /**
   * Slug for the tag, a unique URL-friendly identifier.
   * Should be unique and non-null.
   *
   * @type {string}
   * @memberof Tag
   */
  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  /**
   * Optional description providing additional details about the tag.
   *
   * @type {string}
   * @memberof Tag
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  /**
   * Optional JSON schema associated with the tag.
   * Can be used to store metadata for the tag.
   *
   * @type {string}
   * @memberof Tag
   */
  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  /**
   * Optional URL for the featured image associated with the tag.
   * Used for visual representation of the tag.
   *
   * @type {string}
   * @memberof Tag
   */
  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageURL?: string;

  /**
   * Timestamp of when the tag was created.
   * Automatically generated when a new tag is added to the database.
   *
   * @type {Date}
   * @memberof Tag
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * Timestamp of the last update made to the tag.
   * Automatically updated whenever the tag is modified.
   *
   * @type {Date}
   * @memberof Tag
   */
  @UpdateDateColumn()
  updateDate: Date;

  /**
   * Soft delete timestamp indicating when the tag was deleted.
   * If the value is null, the tag is considered active.
   *
   * @type {Date}
   * @memberof Tag
   */
  @DeleteDateColumn()
  dateDeleteAt: Date;
}
