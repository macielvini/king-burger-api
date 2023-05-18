import { Module } from '@nestjs/common';
import { FindAllService } from './services/find-all-items.service';
import { FindAllItemsRepository } from './repositories';
import { FindAllController } from './controller';
import { FindByCategoryController } from './controller/find-by-category.controller';
import { FindByCategoryRepository } from './repositories/find-by-category.repository';
import { FindByCategoryService } from './services/find-by-category.service';

@Module({
  exports: [],
  imports: [],
  providers: [
    FindAllService,
    FindAllItemsRepository,
    FindByCategoryRepository,
    FindByCategoryService,
  ],
  controllers: [FindAllController, FindByCategoryController],
})
export class ItemsModule {}
