import { Injectable } from '@nestjs/common';
import { FindByCategoryRepository } from '../repositories/find-by-category.repository';

@Injectable()
export class FindByCategoryService {
  constructor(
    private readonly findByCategoryRepository: FindByCategoryRepository,
  ) {}

  async handle(id: string) {
    return await this.findByCategoryRepository.handle(id);
  }
}
