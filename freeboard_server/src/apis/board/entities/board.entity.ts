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

  @Column()
  @Field(() => String)
  zipcode: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  addressDetail: string;

  @Column('text')
  @Field(() => String)
  content: string;

  @Column('text', { nullable: true })
  @Field({ nullable: true })
  url?: string;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;
}
