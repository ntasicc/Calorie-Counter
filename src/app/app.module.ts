import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { recipeReducer } from './store/recipe.reducer';
import { RecipeEffect } from './store/recipe.effects';
import { ingredientReducer } from './store/ingredient.reducer';
import { IngredientEffect } from './store/ingredient.effects';
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [AppComponent, RecipeCardComponent, RecipeListComponent, IngredientCardComponent, IngredientListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      recipes: recipeReducer,
      ingredients: ingredientReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([RecipeEffect, IngredientEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
