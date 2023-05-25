import { Injectable } from '@nestjs/common';
import { CreateItemRepository } from '../repositories/create-item.repository';
import { CreateItemDTO } from '../dtos';
import { FindIngredientsByIds } from './find-ingredients-by-id.service';

@Injectable()
export class CreateItemService {
  constructor(
    private readonly createItemRepository: CreateItemRepository,
    private readonly findIngredientsByIds: FindIngredientsByIds,
  ) {}

  async handle(dto: CreateItemDTO) {
    const ingredientsIds = dto.ingredients.map((ingredient) => ingredient.id);
    await this.findIngredientsByIds.handle(ingredientsIds);

    const data = await this.createItemRepository.handle({
      data: {
        ...dto,
        price: dto.price * 100,
        ingredients: { connect: [...dto.ingredients] },
      },
    });

    return data;
  }
}
