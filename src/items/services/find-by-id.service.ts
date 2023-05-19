import { Injectable, NotFoundException } from '@nestjs/common';
import { FindByIdRepository } from '../repositories/find-by-id.repository';
import { formatPrice } from 'src/utils';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindByIdService {
  constructor(private readonly repository: FindByIdRepository) {}

  async handle(args: Prisma.ItemFindUniqueArgs) {
    const data = await this.repository.handle({
      ...args,
      include: {
        category: { select: { id: true, name: true } },
        ingredients: { select: { id: true, name: true } },
      },
    });

    if (!data) throw new NotFoundException('item not found');

    return { ...data, price: formatPrice(data.price) };
  }
}
