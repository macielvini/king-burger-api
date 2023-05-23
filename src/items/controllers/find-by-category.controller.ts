import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindByCategoryService } from '../services';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('items')
export class FindByCategoryController {
  constructor(private readonly findByCategoryService: FindByCategoryService) {}

  @Get('categories/:id')
  async handle(@Param() params: { id: string }) {
    return await this.findByCategoryService.handle(params.id);
  }
}
