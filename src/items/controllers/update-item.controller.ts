import { Body, Controller, Patch, UseGuards } from '@nestjs/common';
import { UpdateItemDTO } from '../dtos';
import { UpdateItemService } from '../services/update-item.service';
import { Role } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';

@Role('ADMIN')
@UseGuards(AuthGuard, RoleGuard)
@Controller('items')
export class UpdateItemController {
  constructor(private readonly updateItemService: UpdateItemService) {}
  @Patch()
  async handle(@Body() dto: UpdateItemDTO) {
    await this.updateItemService.handle(dto);
    return { message: 'updated' };
  }
}
