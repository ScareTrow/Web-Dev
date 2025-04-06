from django.urls import path
from api.views import (
    companies_list,
    company_detail,
    VacancyList,
    top_ten_vacancies,
    VacancyDetail,
    company_vanacies,
)

urlpatterns = [
    path("companies/", companies_list),
    path("companies/<int:id>/", company_detail),
    path("companies/<int:id>/vacancies/", company_vanacies),
    path("vacancies/top_ten/", top_ten_vacancies),
    path("vacancies/", VacancyList.as_view()),
    path("vacancies/<int:id>/", VacancyDetail.as_view()),
]
