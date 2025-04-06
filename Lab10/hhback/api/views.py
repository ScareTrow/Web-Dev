from django.http import JsonResponse, Http404
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy
from rest_framework.parsers import JSONParser

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.views.decorators.csrf import csrf_exempt
from .serializers import CompanySerializer, VacancySerializer


@csrf_exempt
def companies_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)


@csrf_exempt
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    data = {"vacancies": list(vacancies.values())}
    return JsonResponse(data)


@csrf_exempt
def company_vanacies(request, id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    data = {"vacancies": list(vacancies.values())}
    return JsonResponse(data)


# Class based views for Vacanies


class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = JSONParser().parse(request)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetail(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(pk=id)
        except Vacancy.DoesNotExist:
            raise Http404

    def get(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = self.get_object(id)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
