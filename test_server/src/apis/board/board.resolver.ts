import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService, //
  ) {}
  @Query(() => Board)
  async fetchBoard(
    @Args('number') number: number, //
  ) {
    return await this.boardService.findOne({ number });
  }

  @Query(() => [Board])
  async fetchBoards() {
    return await this.boardService.find();
  }

  @Mutation(() => Board)
  async createBoard(
    @Args('number') number: string,
    @Args('message') message: string,
  ) {
    return await this.boardService.create({ number, message });
  }

  @Mutation(() => Boolean)
  deleteBoard(
    @Args('number') number: number, //
  ) {
    return this.boardService.delete({ number });
  }

  @Mutation(() => Board)
  async updateBoard(
    @Args('number') number: number, //
    @Args('message') message: string,
  ) {
    console.log(number, message);
    return this.boardService.update({ number, message });
  }
}
