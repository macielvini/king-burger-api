import { Module } from '@nestjs/common';
import {
  CreateItemRepository,
  DeleteItemRepository,
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
  DeleteItemController,
  FindAllCategoriesController,
  FindAllController,
  FindByCategoryController,
  FindByIdController,
  UpdateItemController,
} from './controllers';
import {
  CreateItemService,
  DeleteItemService,
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
    DeleteItemService,
    DeleteItemRepository,
  ],
  controllers: [
    FindAllController,
    FindByCategoryController,
    FindAllCategoriesController,
    FindByIdController,
    CreateItemController,
    UpdateItemController,
    DeleteItemController,
  ],
})
export class ItemsModule {}
