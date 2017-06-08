import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { CompletenessPipe } from './completeness.pipe';
import { FormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    EditRecipeComponent,
    NewRecipeComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
