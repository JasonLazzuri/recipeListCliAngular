import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: `./recipe-list.component.html`
})

export class RecipeListComponent implements OnInit{
   @Input() childRecipeList: Recipe[];
   @Output() clickSender = new EventEmitter();

   editButtonHasBeenClicked(currentRecipe: Recipe) {
       this.clickSender.emit(currentRecipe);
     }

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleCooked(clickedRecipe: Recipe, setCompleteness: boolean) {
   clickedRecipe.cooked = setCompleteness;
 }

  difficultyColor(currentRecipe){
    if (currentRecipe.difficulty === 3){
      return "bg-danger";
    } else if (currentRecipe.difficulty === 2) {
      return  "bg-warning";
    } else {
      return "bg-success";
    }
  }

  haveCooked(clickedRecipe: Recipe) {
    console.log(clickedRecipe)
   if(clickedRecipe.cooked === true) {
     alert("This recipe has been cooked!");
   } else {
     alert("This recipe has not been tried, test it out!");
   }
 }


   constructor() { }

   ngOnInit() {
   }
}
