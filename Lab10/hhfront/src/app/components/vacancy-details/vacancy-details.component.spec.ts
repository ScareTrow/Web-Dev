import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailsComponent } from './vacancy-details.component';

describe('VacancyDetailsComponent', () => {
  let component: VacancyDetailsComponent;
  let fixture: ComponentFixture<VacancyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
