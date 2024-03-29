import { UserEntity } from '../user/user.entity';
import { IdeaEntity } from '../idea/idea.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, JoinTable} from 'typeorm';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  comment: string;

  @ManyToOne(type => UserEntity)
  @JoinTable()
  author: UserEntity;

  @ManyToOne(type => IdeaEntity, idea => idea.comments)
  idea: IdeaEntity;
}
