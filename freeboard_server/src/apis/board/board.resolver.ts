import { Resolver, Args, Mutation, Query, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { CreateReviewInput } from './dto/createReview.input';
import { UpdateBoardInput } from './dto/updateBoard.input';
import { Board } from './entities/board.entity';
import { Review } from './entities/review.entity';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService, //
  ) {}

  @Query(() => [Board])
  async fetchBoards(@Args('page', { nullable: true }) page: number) {
    return await this.boardService.find({ page });
  }

  @Query(() => Board)
  async fetchBoard(@Args('id', { nullable: true }) id: number) {
    return await this.boardService.findOne({ id });
  }

  @Query(() => [Review])
  async fetchReviews(@Args('id', { nullable: true }) id: number) {
    return await this.boardService.findReviews({ id });
  }

  @Mutation(() => String)
  async createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    return await this.boardService.save({ createBoardInput });
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Args('id') id: number) {
    return await this.boardService.delete({ id });
  }

  @Mutation(() => String)
  async updateBoard(
    @Args('id', { nullable: true }) id: string,
    @Args('updateBoardInput') updateBoardInput: UpdateBoardInput,
  ) {
    const result = await this.boardService.update({
      id,
      updateBoardInput,
    });

    if (result) return id;
  }

  @Mutation(() => Int)
  async createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    return await this.boardService.saveReview({ createReviewInput });
  }
}
