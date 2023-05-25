import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(dto: Prisma.ItemCreateArgs) {
    return await this.prisma.item.create(dto);
  }
}
