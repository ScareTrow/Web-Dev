import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | undefined;
  vacancies: Vacancy[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];  // the '+' symbol converts the string parameter to a number
      this.getCompany(id);
      this.getCompanyVacancies(id);
    });
  }

  getCompany(id: number): void {
    this.apiService.getCompany(id).subscribe(company => {
      this.company = company;
    });
  }

  getCompanyVacancies(id: number): void {
    this.apiService.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data.vacancies;   
    });
  }
}
