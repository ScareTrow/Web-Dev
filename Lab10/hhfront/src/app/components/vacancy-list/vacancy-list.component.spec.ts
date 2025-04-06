import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyListComponent } from './vacancy-list.component';

describe('VacancyListComponent', () => {
  let component: VacancyListComponent;
  let fixture: ComponentFixture<VacancyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
