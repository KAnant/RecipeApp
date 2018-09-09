import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RecipesService } from '../../_services/recipes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.scss']
})
export class EditRecipesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private recipeService: RecipesService, private toastr: ToastrService, private router: Router) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      recipeId: [],
      recipeName: ['', Validators.required],
      ingredientName: ['', Validators.required],
      instructions: ['', Validators.required]
    });

  }
  onSubmit(formRecipe)  {
    console.log(formRecipe);
      
    this.recipeService.updateRecipes(formRecipe)
     .subscribe(
       (data: any) => {
         if (data === true) {
           this.router.navigate(['list-recipes']);
           this.toastr.success('Recipe successfully updated!');
         } else {
           this.toastr.error('Unable to update recipe!');
           //this.loading = false;
         }
       });
      //  error => {
      //    // console.log(error)
      //    //this.alertService.error(error);
      //    this.toastr.error('Unable to update recipe!');
      //    //this.loading = false;
      //  }
    
    

 }

}
