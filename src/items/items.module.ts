import { Module } from '@nestjs/common';
import {
  FindAllCategoriesRepository,
  FindAllItemsRepository,
  FindByCategoryRepository,
  FindByIdRepository,
} from './repositories';
import {
  FindAllCategoriesController,
  FindAllController,
  FindByCategoryController,
  FindByIdController,
} from './controllers';
import {
  FindAllCategoriesService,
  FindAllService,
  FindByCategoryService,
  FindByIdService,
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
    FindByIdService,
    FindByIdRepository,
  ],
  controllers: [
    FindAllController,
    FindByCategoryController,
    FindAllCategoriesController,
    FindByIdController,
  ],
})
export class ItemsModule {}
