import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class FindItemByNameRepository {
  constructor(private readonly prisma: PrismaService) {}
  async handle(args: Prisma.ItemFindUniqueArgs) {
    return await this.prisma.item.findUnique(args);
  }
}
