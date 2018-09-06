import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { Router } from '@angular/router';
import { RecipesService } from '../../_services/recipes.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {

  recipes: Recipes[];
  selectedRecipe: Recipes;
  constructor(private router: Router, private recipeService: RecipesService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (form.value.recipeId == null) {
      this.recipeService.createRecipes(form.value)
        .subscribe(data => {
          this.recipeService.getRecipes();
          this.toastr.success('New recipe added succesfully');
        });
    }
    else {
      this.recipeService.updateRecipes(form.value.recipeId)
        .subscribe(data => {
          this.recipeService.getRecipes();
          this.toastr.success('Record updated succesfully');
        });
    }
  }
}
