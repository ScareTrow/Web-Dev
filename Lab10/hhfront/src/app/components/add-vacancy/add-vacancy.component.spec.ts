import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacancyComponent } from './add-vacancy.component';

describe('AddVacancyComponent', () => {
  let component: AddVacancyComponent;
  let fixture: ComponentFixture<AddVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVacancyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
