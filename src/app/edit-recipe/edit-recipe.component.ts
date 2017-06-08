import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  haveCooked(clickedRecipe: Recipe) {
    console.log(clickedRecipe)
   if(clickedRecipe.cooked === true) {
     alert("This recipe has been cooked!");
   } else {
     alert("This recipe has not been tried, test it out!");
   }
  }

  public cookedStatus = [
    {value: true, display: 'tried'},
    {value: false, display: 'have not tried'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
