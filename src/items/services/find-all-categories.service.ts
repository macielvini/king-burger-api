import { Injectable } from '@nestjs/common';
import { FindAllCategoriesRepository } from '../repositories';

@Injectable()
export class FindAllCategoriesService {
  constructor(
    private readonly findAllCategoriesRepository: FindAllCategoriesRepository,
  ) {}

  async handle() {
    return await this.findAllCategoriesRepository.handle();
  }
}
