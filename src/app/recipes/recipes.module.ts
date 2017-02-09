import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from '.././recipes/recipes.component';
import { RecipeListComponent } from '.././recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from '.././recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from '.././recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '.././recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '.././recipes/recipe-start.component';
import { recipesRouting } from './recipes.routing';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    recipesRouting
  ]
})
export class RecipesModule {

}
