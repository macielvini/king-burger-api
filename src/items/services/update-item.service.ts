import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateItemDTO } from '../dtos';
import { ValidateIngredientsByIdsService } from './validate-ingredients-by-ids.service';
import { UpdateItemRepository } from '../repositories';

@Injectable()
export class UpdateItemService {
  constructor(
    private readonly updateItemRepository: UpdateItemRepository,
    private readonly validateIngredientsByIds: ValidateIngredientsByIdsService,
  ) {}

  async handle(dto: UpdateItemDTO) {
    if (Object.keys(dto).length <= 1)
      throw new BadRequestException(
        `To update an item specify at least one new property.`,
      );

    if (dto.ingredients) {
      const ingredientsIds = dto.ingredients.map((ingredient) => ingredient.id);
      await this.validateIngredientsByIds.handle(ingredientsIds);
    }

    if (dto.price) {
      dto.price = dto.price * 100;
    }

    await this.updateItemRepository.handle({
      where: { id: dto.id },
      data: {
        ...dto,
        ingredients: { connect: dto.ingredients },
      },
    });
  }

  return;
}
