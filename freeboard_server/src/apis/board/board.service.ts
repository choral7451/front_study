import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Review } from './entities/review.entity';

export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>, //

    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>, //
  ) {}

  async find() {
    return await this.boardRepository.find();
  }

  async findReviews({ id }) {
    return await this.reviewRepository.find({ where: { pageNum: id } });
  }

  async findOne({ id }) {
    return await this.boardRepository.findOne({ where: { id } });
  }

  async save({ createBoardInput }) {
    const result = await this.boardRepository.save({
      ...createBoardInput,
    });

    return result.id;
  }

  async delete({ id }) {
    try {
      await this.boardRepository.delete({
        id,
      });
      return true;
    } catch {
      return false;
    }
  }

  async saveReview({ createReviewInput }) {
    const result = await this.reviewRepository.save({
      ...createReviewInput,
    });

    return result.pageNum;
  }
}
