import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindAllCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle() {
    return await this.prisma.category.findMany();
  }
}
