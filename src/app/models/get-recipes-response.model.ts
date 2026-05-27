import { RecipeModel } from './recipe.model';

export interface GetRecipesResponseModel {
  recipes: RecipeModel[];
  total: number;
  skip: number;
  limit: number;
}