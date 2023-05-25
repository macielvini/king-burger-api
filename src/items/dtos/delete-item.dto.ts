import { IsUUID } from 'class-validator';

export class DeleteItemDTO {
  @IsUUID()
  id: string;
}
