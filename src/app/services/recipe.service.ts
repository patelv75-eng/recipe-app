import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RecipeModel } from '../models/recipe.model';
import { GetRecipesResponseModel } from '../models/get-recipes-response.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<GetRecipesResponseModel>(this.recipesUrl).pipe(
      map((response: GetRecipesResponseModel) => response.recipes)
    );
  }

  getRecipeById(id: number): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.recipesUrl}/${id}`);
  }
}