import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindByIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.ItemFindUniqueArgs) {
    const data = await this.prisma.item.findUnique(args);

    return data;
  }
}
