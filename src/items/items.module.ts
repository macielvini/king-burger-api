import { Module } from '@nestjs/common';
import {
  CreateItemRepository,
  FindAllCategoriesRepository,
  FindAllItemsRepository,
  FindByCategoryRepository,
  FindByIdRepository,
  FindIngredientsByIdsRepository,
  FindItemByNameRepository,
  UpdateItemRepository,
} from './repositories';
import {
  CreateItemController,
  FindAllCategoriesController,
  FindAllController,
  FindByCategoryController,
  FindByIdController,
  UpdateItemController,
} from './controllers';
import {
  CreateItemService,
  FindAllCategoriesService,
  FindAllService,
  FindByCategoryService,
  FindByIdService,
  UpdateItemService,
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
    CreateItemService,
    CreateItemRepository,
    ValidateIngredientsByIdsService,
    FindIngredientsByIdsRepository,
    FindItemByNameRepository,
    UpdateItemService,
    UpdateItemRepository,
  ],
  controllers: [
    FindAllController,
    FindByCategoryController,
    FindAllCategoriesController,
    FindByIdController,
    CreateItemController,
    UpdateItemController,
  ],
})
export class ItemsModule {}
