import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  writer: string;

  @Column('text')
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => Int)
  star: number;

  @Column()
  @Field(() => Int)
  pageNum: number;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
