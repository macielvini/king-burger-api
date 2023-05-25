import { Injectable } from '@nestjs/common';
import { DeleteItemRepository } from '../repositories';
import { FindByIdService } from './find-by-id.service';
import { DeleteItemDTO } from '../dtos';

@Injectable()
export class DeleteItemService {
  constructor(
    private readonly deleteItemRepository: DeleteItemRepository,
    private readonly findById: FindByIdService,
  ) {}

  async handle(dto: DeleteItemDTO) {
    await this.findById.handle({ where: { id: dto.id } });

    await this.deleteItemRepository.handle({ where: { id: dto.id } });

    return;
  }
}
