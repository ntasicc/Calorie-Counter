import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private httpClient: HttpClient) {}

  getAllrecipes() {
    return this.httpClient.get<Recipe[]>(`${environment.apiURL}recipes`);
  }

  bookmarkRecipe(recipeID: number, newValue: string) {
    return this.httpClient.patch<Recipe>(
      `${environment.apiURL}recipes/${recipeID}`,
      { id: recipeID, bookmark: newValue }
    );
  }
}
