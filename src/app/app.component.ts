import { Component } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public cooked: string = 'false';
  masterRecipeList: Recipe[] = [
    new Recipe('Pizza', ['pepperoni', 'cheese', 'dough'], 'bake it', 2),
    new Recipe('Tacos', ['ground beef', 'tortillas', 'cheese'], 'put it together', 3)
  ];

  selectedRecipe = null;

  editRecipe(currentRecipe) {
    this.selectedRecipe = currentRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }
}
