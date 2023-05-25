import { Module } from '@nestjs/common';
import {
  CreateItemRepository,
  FindAllCategoriesRepository,
  FindAllItemsRepository,
  FindByCategoryRepository,
  FindByIdRepository,
  FindIngredientsByIdsRepository,
  FindItemByNameRepository,
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
  ValidateIngredientsByIdsService,
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
    ValidateIngredientsByIdsService,
    FindIngredientsByIdsRepository,
    FindItemByNameRepository,
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
