import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entity representing a Meta option in the database.
 * This entity is used to store options in JSON format with creation and update date fields.
 *
 * @export
 * @class MetaOption
 */
@Entity()
export class MetaOption {
  /**
   * Unique identifier for the Meta option.
   * Automatically generated.
   *
   * @type {number}
   * @memberof MetaOption
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Value of the Meta option in JSON format.
   * This column is required and must be in valid JSON format.
   *
   * @type {string}
   * @memberof MetaOption
   */
  @Column({
    type: 'json',
    nullable: false,
  })
  metaValue: string;

  /**
   * Creation date of the Meta option.
   * Managed automatically by TypeORM.
   *
   * @type {Date}
   * @memberof MetaOption
   */
  @CreateDateColumn()
  createDate: Date;

  /**
   * Update date of the Meta option.
   * Managed automatically by TypeORM.
   *
   * @type {Date}
   * @memberof MetaOption
   */
  @UpdateDateColumn()
  updateDate: Date;

  /**
   * Make a bi-directonal one-to-one relation with post
   */
  @OneToOne(() => Post, (post) => post.metaOption, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  post: Post;
}
