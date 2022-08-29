import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column('text')
  @Field(() => String)
  content: string;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
