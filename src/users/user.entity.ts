import { Exclude } from 'class-transformer';
import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents a user entity in the application.
 * This entity is stored in the database and holds essential user information.
 *
 * @export
 * @class User
 */
@Entity()
export class User {
  /**
   * Unique identifier for the user.
   * This ID is automatically generated by the database upon creation.
   *
   * @type {number}
   * @memberof User
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User's first name.
   * This field is required and cannot exceed 96 characters.
   *
   * @type {string}
   * @memberof User
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string;

  /**
   * User's last name.
   * This field is optional and can be left empty.
   * The length is limited to 96 characters.
   *
   * @type {string}
   * @memberof User
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName: string;

  /**
   * User's unique email address.
   * This field is required, must be unique across all users, and cannot exceed 96 characters.
   *
   * @type {string}
   * @memberof User
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;

  /**
   * User's password.
   * This field is required and should not exceed 96 characters.
   * It is stored as a plain string; make sure to hash it before saving to ensure security.
   *
   * @type {string}
   * @memberof User
   */
  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  @Exclude()
  password?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  @Exclude()
  googleId?: string;

  /**
   * Make a one-to-many relation with post
   * One author can have multiple post
   */
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
