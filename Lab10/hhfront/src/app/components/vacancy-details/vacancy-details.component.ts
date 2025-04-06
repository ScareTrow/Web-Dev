import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from '../../models/vacancy';
import { Company } from '../../models/company';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy: Vacancy | undefined;
  company: Company | undefined;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getVacancy(id);
    });
  }

  getVacancy(id: number): void {
    this.apiService.getVacancy(id).subscribe(vacancy => {
      this.vacancy = vacancy;
      if (vacancy.company_id) {
        this.getCompany(vacancy.company_id);
      }
    });
  }

  getCompany(company_id: number): void {
    this.apiService.getCompany(company_id).subscribe(company => {
      this.company = company;
    });
  }

  updateVacancy(): void {
    if (this.vacancy) {
      this.apiService.updateVacancy(this.vacancy.id, this.vacancy).subscribe({
        next: (updatedVacancy) => {
          console.log('Vacancy updated:', updatedVacancy);
          this.router.navigate(['/vacancies']);
        },
        error: (error) => console.error('There was an error!', error)
      });
    }
  }

  deleteVacancy(): void {
    if (this.vacancy) {
      this.apiService.deleteVacancy(this.vacancy.id).subscribe({
        next: () => {
          console.log('Vacancy deleted');
          this.router.navigate(['/vacancies']);
        },
        error: (error) => console.error('Error deleting the vacancy', error)
      });
    }
  }
}
