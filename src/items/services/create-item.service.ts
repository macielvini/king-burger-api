import { ConflictException, Injectable } from '@nestjs/common';
import { CreateItemRepository } from '../repositories/create-item.repository';
import { CreateItemDTO } from '../dtos';
import { FindItemByNameRepository } from '../repositories';
import { ValidateIngredientsByIdsService } from './validate-ingredients-by-ids.service';

@Injectable()
export class CreateItemService {
  constructor(
    private readonly createItemRepository: CreateItemRepository,
    private readonly validateIngredientsByIds: ValidateIngredientsByIdsService,
    private readonly findItemByName: FindItemByNameRepository,
  ) {}

  async handle(dto: CreateItemDTO) {
    const ingredientsIds = dto.ingredients.map((ingredient) => ingredient.id);
    await this.validateIngredientsByIds.handle(ingredientsIds);

    const nameExists = await this.findItemByName.handle({
      where: { name: dto.name },
    });

    if (nameExists) throw new ConflictException('duplicate');

    await this.createItemRepository.handle({
      data: {
        ...dto,
        price: dto.price * 100,
        ingredients: { connect: [...dto.ingredients] },
      },
    });

    return;
  }
}
