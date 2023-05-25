import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateItemDTO } from './create-item.dto';

export class UpdateItemDTO extends PartialType(CreateItemDTO) {
  @IsUUID('all', { message: 'id must be specified and a valid UUID' })
  id: string;
}
