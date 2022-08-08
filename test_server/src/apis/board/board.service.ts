import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';

export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>, //
  ) {}

  async findOne({ _id }) {
    return await this.boardRepository.findOne({ where: { _id } });
  }

  async find() {
    return await this.boardRepository.find();
  }

  async create({ number, message }) {
    return await this.boardRepository.save({
      number,
      message,
    });
  }

  async delete({ number }) {
    try {
      await this.boardRepository.delete({
        number: number,
      });
      return true;
    } catch {
      return false;
    }
  }
}
