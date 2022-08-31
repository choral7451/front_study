import { Field, InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput {
  @Field({ nullable: true })
  writer?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  url?: string;
}
