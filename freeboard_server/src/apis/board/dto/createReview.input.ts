import { InputType, OmitType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';
import { Review } from '../entities/review.entity';

@InputType()
export class CreateReviewInput extends OmitType(
  Review,
  ['id', 'updatedAt'],
  InputType,
) {}
