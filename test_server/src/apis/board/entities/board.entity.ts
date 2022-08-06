import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Board {
  @Field(() => String)
  _id: string;

  @Field(() => Int)
  number: number;

  @Field(() => String)
  message: string;
}
