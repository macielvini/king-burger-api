import { Controller, Get, Param } from '@nestjs/common';
import { FindByCategoryService } from '../services/find-by-category.service';

@Controller('items')
export class FindByCategoryController {
  constructor(private readonly findByCategoryService: FindByCategoryService) {}

  @Get('category/:id')
  async handle(@Param() params: { id: string }) {
    return await this.findByCategoryService.handle(params.id);
  }
}
