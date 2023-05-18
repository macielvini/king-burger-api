import { Module } from '@nestjs/common';
import {
  FindAllCategoriesRepository,
  FindAllItemsRepository,
  FindByCategoryRepository,
} from './repositories';
import {
  FindAllCategoriesController,
  FindAllController,
  FindByCategoryController,
} from './controller';
import {
  FindAllCategoriesService,
  FindAllService,
  FindByCategoryService,
} from './services';

@Module({
  exports: [],
  imports: [],
  providers: [
    FindAllService,
    FindAllItemsRepository,
    FindByCategoryRepository,
    FindByCategoryService,
    FindAllCategoriesService,
    FindAllCategoriesRepository,
  ],
  controllers: [
    FindAllController,
    FindByCategoryController,
    FindAllCategoriesController,
  ],
})
export class ItemsModule {}
