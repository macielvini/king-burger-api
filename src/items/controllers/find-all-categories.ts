import { Controller, Get } from '@nestjs/common';
import { FindAllCategoriesService } from '../services';

@Controller('items')
export class FindAllCategoriesController {
  constructor(private readonly service: FindAllCategoriesService) {}

  @Get('category')
  async handle() {
    return this.service.handle();
  }
}
