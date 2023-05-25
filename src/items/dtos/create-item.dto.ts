import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateItemDTO {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsUrl()
  image: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  price: number;

  @IsString()
  @IsUUID()
  categoryId: string;

  @IsArray()
  @ValidateNested({
    each: true,
    message: 'Invalid objects. Expected: {id: "uuid"}',
  })
  @ArrayMaxSize(20)
  @ArrayMinSize(2)
  @Type(() => IngredientId)
  ingredients: IngredientId[];
}

class IngredientId {
  @IsString()
  @IsUUID()
  id: string;
}
