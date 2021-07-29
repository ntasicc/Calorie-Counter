import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private httpClient: HttpClient) {}

  loadAllIngridients() {
    return this.httpClient.get<Ingredient[]>(
      `${environment.apiURL}ingredients`
    );
  }

  loadIngridientsOfSpecificRecipe(recipeID: number) {
    return this.httpClient.get<Ingredient[]>(
      `${environment.apiURL}ingredients/?recipeID=${recipeID}`
    );
  }
}
