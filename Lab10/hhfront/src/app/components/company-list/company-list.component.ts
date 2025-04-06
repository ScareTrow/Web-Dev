import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

}
