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
  onSubmit() {
    alert("test")
    this.recipeService.updateRecipes(this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['list-recipes']);
      });
  }

}
