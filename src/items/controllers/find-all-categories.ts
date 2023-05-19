import { Controller, Get } from '@nestjs/common';
import { FindAllCategoriesService } from '../services';

@Controller('items')
export class FindAllCategoriesController {
  constructor(private readonly service: FindAllCategoriesService) {}

  @Get('categories')
  async handle() {
    return this.service.handle();
  }
}
