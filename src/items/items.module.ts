import { Module } from '@nestjs/common';
import { FindAllService } from './services/find-all-items.service';
import { FindAllItemsRepository } from './repositories';
import { FindAllController } from './controller';

@Module({
  exports: [],
  imports: [],
  providers: [FindAllService, FindAllItemsRepository],
  controllers: [FindAllController],
})
export class ItemsModule {}
