import { Body, Controller, Delete, UseGuards } from '@nestjs/common';
import { Role } from 'src/decorators/role.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RoleGuard } from 'src/guards/roles.guard';
import { DeleteItemService } from '../services';
import { DeleteItemDTO } from '../dtos';

@Role('ADMIN')
@UseGuards(AuthGuard, RoleGuard)
@Controller('items')
export class DeleteItemController {
  constructor(private readonly deleteItemService: DeleteItemService) {}

  @Delete()
  async handle(@Body() dto: DeleteItemDTO) {
    return await this.deleteItemService.handle(dto);
  }
}
