import { Injectable, NotFoundException } from '@nestjs/common';
import { FindByCategoryRepository } from '../repositories/find-by-category.repository';

@Injectable()
export class FindByCategoryService {
  constructor(
    private readonly findByCategoryRepository: FindByCategoryRepository,
  ) {}

  async handle(id: string) {
    const data = await this.findByCategoryRepository.handle(id);
    if (data.length <= 0) throw new NotFoundException('id not found');

    return data;
  }
}
