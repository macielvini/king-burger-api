import { Controller, Get, Param } from '@nestjs/common';
import { FindByCategoryService } from '../services';

@Controller('items')
export class FindByCategoryController {
  constructor(private readonly findByCategoryService: FindByCategoryService) {}

  @Get('categories/:id')
  async handle(@Param() params: { id: string }) {
    return await this.findByCategoryService.handle(params.id);
  }
}
