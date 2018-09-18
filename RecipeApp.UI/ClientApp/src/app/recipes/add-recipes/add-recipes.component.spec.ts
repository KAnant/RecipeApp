import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { AddRecipesComponent } from './add-recipes.component';
import {DebugElement} from '@angular/core';
import { RecipesService } from '../../_services/recipes.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddRecipesComponent', () => {
  let component: AddRecipesComponent;
  let fixture: ComponentFixture<AddRecipesComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let spy: jasmine.Spy;
  let recipesService: RecipesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipesComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [RecipesService],
    })
    .compileComponents();
  }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddRecipesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
});
