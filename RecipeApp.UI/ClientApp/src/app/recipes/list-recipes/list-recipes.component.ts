import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import {RecipesService} from '../../_services/recipes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  recipes: Recipes [];
  //public recipes: any;

  constructor(private router: Router, private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
    .subscribe(data => {
      this.recipes=data;
    });
  }

}
