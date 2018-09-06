import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { Router } from '@angular/router';
import { RecipesService } from '../../_services/recipes.service';
import { NgForm, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {

  recipes :any =  {};
  //recipes: Recipes[];
  // recipes: Recipes = {
  //   recipeId: null,
  //   recipeName: '',
  //   ingredientId: null,
  //   ingredientName: '',
  //   step_no: null,
  //   instructions: ''
  // }
  // selectedRecipe: Recipes;
  constructor(private router: Router, private recipeService: RecipesService, private toastr: ToastrService) { }

 // recForm: FormGroup;
  ngOnInit() {

  }

  onSubmit(recForm:NgForm) {
    alert("Successfull"+ JSON.stringify(this.recipes))
    // this.recipeService.createRecipes(recForm.value)
    // .subscribe(data => {
    //   this.router.navigate(['list-recipes']);
    // },
    // error => {
    //   alert(error);
    
    // });

  }
}
