import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllService } from '../services';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('items')
export class FindAllController {
  constructor(private readonly findAllService: FindAllService) {}

  @Get()
  async handle() {
    return this.findAllService.handle();
  }
}
