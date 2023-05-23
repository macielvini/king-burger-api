import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindByIdService } from '../services/find-by-id.service';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('items')
export class FindByIdController {
  constructor(private readonly service: FindByIdService) {}

  @Get(':id')
  async handle(@Param() params: { id: string }) {
    return await this.service.handle({ where: { id: params.id } });
  }
}
