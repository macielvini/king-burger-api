import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdService } from '../services/find-by-id.service';

@Controller('items')
export class FindByIdController {
  constructor(private readonly service: FindByIdService) {}

  @Get(':id')
  async handle(@Param() params: { id: string }) {
    return await this.service.handle({ where: { id: params.id } });
  }
}
