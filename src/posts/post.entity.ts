import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { postType } from './enums/postType.enum';
import { postStatus } from './enums/status.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';

/**
 * Represents a blog post.
 */
@Entity()
export class Post {
  /**
   * The unique identifier for the post.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The title of the post.
   */
  @Column({ type: 'varchar', length: 512, nullable: false })
  title: string;

  /**
   * The type of the post (e.g., article, video).
   */
  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  /**
   * The slug for the post, used in the URL.
   */
  @Column({ type: 'varchar', unique: true, nullable: false, length: 256 })
  slug: string;

  /**
   * The current status of the post (e.g., draft, published).
   */
  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  /**
   * The content of the post.
   */
  @Column({ type: 'text', nullable: true })
  content?: string;

  /**
   * A JSON schema associated with the post.
   */
  @Column({ type: 'text', nullable: true })
  schema?: string;

  /**
   * A URL to a featured image for the post.
   */
  @Column({ type: 'varchar', nullable: true, length: 1024 })
  featuredImageUrl?: string;

  /**
   * The date and time when the post will be published.
   */
  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  /**
   * An array of tags associated with the post.
   */
  @Column('simple-array', { nullable: true })
  tags?: string[];

  /**
   * The meta options associated with the post.
   */
  @OneToOne(() => MetaOption)
  @JoinColumn()
  metaOption?: MetaOption;
}
