import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindIngredientsByIdsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(ids: string[]) {
    const data = await this.prisma.ingredient.findMany({
      where: { id: { in: ids } },
    });

    return data;
  }
}
