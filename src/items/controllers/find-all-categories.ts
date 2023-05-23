import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllCategoriesService } from '../services';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('items')
export class FindAllCategoriesController {
  constructor(private readonly service: FindAllCategoriesService) {}

  @Get('categories')
  async handle() {
    return this.service.handle();
  }
}
