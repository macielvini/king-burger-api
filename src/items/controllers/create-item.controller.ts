import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';
import { CreateItemService } from '../services/create-item.service';
import { CreateItemDTO } from '../dtos';

@Role('ADMIN')
@UseGuards(AuthGuard, RoleGuard)
@Controller('items')
export class CreateItemController {
  constructor(private readonly service: CreateItemService) {}

  @Post()
  async handle(@Body() dto: CreateItemDTO) {
    return await this.service.handle(dto);
  }
}
