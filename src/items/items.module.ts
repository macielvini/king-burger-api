import { Module } from '@nestjs/common';
import {
  CreateItemRepository,
  FindAllCategoriesRepository,
  FindAllItemsRepository,
  FindByCategoryRepository,
  FindByIdRepository,
  FindIngredientsByIdsRepository,
} from './repositories';
import {
  CreateItemController,
  FindAllCategoriesController,
  FindAllController,
  FindByCategoryController,
  FindByIdController,
} from './controllers';
import {
  CreateItemService,
  FindAllCategoriesService,
  FindAllService,
  FindByCategoryService,
  FindByIdService,
  FindIngredientsByIds,
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
    CreateItemRepository,
    CreateItemService,
    FindIngredientsByIds,
    FindIngredientsByIdsRepository,
  ],
  controllers: [
    FindAllController,
    FindByCategoryController,
    FindAllCategoriesController,
    FindByIdController,
    CreateItemController,
  ],
})
export class ItemsModule {}
