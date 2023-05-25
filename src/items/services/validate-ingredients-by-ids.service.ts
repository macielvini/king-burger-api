import { Injectable, NotFoundException } from '@nestjs/common';
import { FindIngredientsByIdsRepository } from '../repositories';

@Injectable()
export class ValidateIngredientsByIdsService {
  constructor(
    private readonly findIngredientsByIdsRepository: FindIngredientsByIdsRepository,
  ) {}

  async handle(ids: string[]) {
    const data = await this.findIngredientsByIdsRepository.handle(ids);
    const validIds = data.map((ing) => ing.id);
    const invalidIds = ids.filter((id) => !validIds.includes(id));

    if (data.length !== ids.length)
      throw new NotFoundException(
        `All ingredients ids must be valid. 
        Invalid ids: [${invalidIds.join(', ')}]`,
      );

    return data;
  }
}
