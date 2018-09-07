import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { Router } from '@angular/router';
import { RecipesService } from '../../_services/recipes.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {

  //recipes :any =  {};
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
  constructor(private formBuilder: FormBuilder, private router: Router, private recipeService: RecipesService, private toastr: ToastrService) { }

 recForm: FormGroup;
  ngOnInit() {
    this.recForm = this.formBuilder.group({
      recipeId: [],
      recipeName: ['', Validators.required],
      ingredientName: ['', Validators.required],
      instructions: ['', Validators.required]
});

  }

  onSubmit() {
    alert("test")
    this.recipeService.createRecipes(this.recForm.value)
      .subscribe( data => {
        this.router.navigate(['list-recipes']);
});
  // onSubmit(recForm:NgForm) {
  //   alert("Successfull"+ JSON.stringify(this.recipes))
    // this.recipeService.createRecipes(recForm.value)
    // .subscribe(data => {
    //   this.router.navigate(['list-recipes']);
    // },
    // error => {
    //   alert(error);
    
    // });

  }
}
