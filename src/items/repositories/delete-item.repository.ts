import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class DeleteItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.ItemDeleteArgs) {
    return await this.prisma.item.delete(args);
  }
}
