import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent implements OnInit{
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: String[], directions: string, difficulty: number) {
    var newRecipeToAdd: Recipe = new Recipe(title, ingredients, directions, difficulty);
    this.newRecipeSender.emit(newRecipeToAdd);

  }

  constructor() { }

  ngOnInit() {
  }
}
