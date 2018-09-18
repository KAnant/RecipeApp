import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
 import { DemoComponent } from './demo.component';
 import {DebugElement} from '@angular/core';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let de: DebugElement;

   beforeEach(async(() =>{
    fixture = TestBed.configureTestingModule({
      declarations: [DemoComponent],
    })
    .createComponent(DemoComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('sets "subject" to "world" by default', () =>{
    expect(component.subject).toBe('world');
  });

  it('greets the subject', () =>{
    const h1= de.query(By.css('h1'));
    expect (h1.nativeElement.innerText).toBe('Hello world!');
  });

  it('updates the subject', () => {
    component.subject = 'Anny';
    fixture.detectChanges();
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello Anny!');

  });


//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DemoComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DemoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
});
