import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacancyComponent } from './components/add-vacancy/add-vacancy.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'vacancies',
    component: VacancyListComponent
  },
  {path:'',
  component: HomePageComponent
},
  {path:'companies/:id',component: 
  CompanyDetailsComponent},
  
  {path:'vacancies/:id',
  component: VacancyDetailsComponent},
  {path:'addvacancy',component:AddVacancyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
