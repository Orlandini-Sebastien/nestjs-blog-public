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

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 512, nullable: false })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  @Column({ type: 'varchar', unique: true, nullable: false, length: 256 })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ type: 'text', nullable: true })
  schema?: string;

  @Column({ type: 'varchar', nullable: true, length: 1024 })
  featuredImageUrl?: string;

  @Column({ type: 'timestamp', nullable: true })
  publishOn?: Date;

  @Column('simple-array', { nullable: true })
  tags?: string[];

  @OneToOne(() => MetaOption)
  @JoinColumn()
  metaOption?: MetaOption;
}
