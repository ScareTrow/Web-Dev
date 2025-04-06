import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {
  vacancies:Vacancy[] = [];
  selectedVanacy : Vacancy | null = null;
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.getVacancies().subscribe( vacancies =>{this.vacancies = vacancies;})
  }

}
