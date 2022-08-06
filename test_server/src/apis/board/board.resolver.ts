import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  @Query(() => Boolean)
  fetchBoard() {
    return true;
  }

  @Mutation(() => Board)
  createBoard(
    @Args('writer') writer: string, //
    @Args('title') title: string,
    @Args('contents') contents: string,
  ) {
    console.log(writer, title, contents);
    const data = {
      _id: '1',
      number: 1,
      message: '내용',
    };

    return data;
  }
}
