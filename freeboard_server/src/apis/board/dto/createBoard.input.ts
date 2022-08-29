import { InputType, OmitType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';

@InputType()
export class CreateBoardInput extends OmitType(
  Board,
  ['id', 'updatedAt'],
  InputType,
) {}
