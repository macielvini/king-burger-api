import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindByCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(id: string) {
    const data = await this.prisma.item.findMany({
      where: { categoryId: id },
      include: {
        ingredients: {
          select: { id: true, name: true },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return data.map((item) => ({ ...item, price: item.price / 100 }));
  }
}
