import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}companies/`);
  }

  getCompanyDetailById(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${companyId}/vacancies/`);
  }
  getVacancies():Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/`);
  }

  getCompanyVacancies(companyId: number): Observable<any> {
    return this.http.get<{vacancies: Vacancy[]}>(`${this.apiUrl}companies/${companyId}/vacancies/`);
  }
  

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}companies/${id}/`);
  }


  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/top_ten/`);
  }


  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}vacancies/${id}/`);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.apiUrl}vacancies/`, vacancy)
      .pipe(catchError(this.handleError));
  }

  updateVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.apiUrl}vacancies/${id}/`, vacancy, {
        headers: { 'Content-Type': 'application/json' }
    });
}

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}vacancies/${id}/`)
      .pipe(catchError(this.handleError));
  }
}
