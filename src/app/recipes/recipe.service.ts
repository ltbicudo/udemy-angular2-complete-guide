import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy 1', 'Dummy 1', 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/crash_test_dummy.png', [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]),
    new Recipe('Dummy 2', 'Dummy 2', 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/crash_test_dummy.png', []),
    new Recipe('Dummy 3', 'Dummy 3', 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/crash_test_dummy.png', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}