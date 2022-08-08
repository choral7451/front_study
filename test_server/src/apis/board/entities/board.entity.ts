import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => String)
  _id: string;

  @Column()
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  message: string;
}
