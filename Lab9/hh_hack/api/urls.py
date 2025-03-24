from django.urls import path
from . import views

urlpatterns = [
    path("companies/", views.companies_list, name="companies_list"),
    path("companies/<int:id>/", views.company_detail, name="company_detail"),
    path(
        "companies/<int:id>/vacancies/",
        views.company_vacancies,
        name="company_vacancies",
    ),
    path("vacancies/", views.vacancies_list, name="vacancies_list"),
    path("vacancies/<int:id>/", views.vacancy_detail, name="vacancy_detail"),
    path("vacancies/top_ten/", views.top_ten_vacancies, name="top_ten_vacancies"),
]
