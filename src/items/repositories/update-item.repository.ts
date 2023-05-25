import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateItemRepository {
  constructor(private readonly prisma: PrismaService) {}
  async handle(dto: Prisma.ItemUpdateArgs) {
    return this.prisma.item.update(dto);
  }
}
