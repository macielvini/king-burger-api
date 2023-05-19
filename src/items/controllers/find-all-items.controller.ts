import { Controller, Get } from '@nestjs/common';
import { FindAllService } from '../services';

@Controller('items')
export class FindAllController {
  constructor(private readonly findAllService: FindAllService) {}

  @Get()
  async handle() {
    return this.findAllService.handle();
  }
}
