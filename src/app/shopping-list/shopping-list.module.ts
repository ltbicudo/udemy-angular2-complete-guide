import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from '.././shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from '.././shopping-list/shopping-list-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ]
})
export class ShoppingListModule {}
