import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllService } from '../services';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';
import { Role } from 'src/decorators/role.decorator';

@Role('ADMIN')
@UseGuards(AuthGuard, RoleGuard)
@Controller('items')
export class FindAllController {
  constructor(private readonly findAllService: FindAllService) {}

  @Get()
  async handle() {
    return this.findAllService.handle();
  }
}
