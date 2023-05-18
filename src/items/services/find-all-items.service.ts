import { Injectable } from '@nestjs/common';
import { FindAllItemsRepository } from '../repositories/find-all-items.repository';

@Injectable()
export class FindAllService {
  constructor(private readonly findAllRepository: FindAllItemsRepository) {}

  async handle() {
    return await this.findAllRepository.handle();
  }
}
