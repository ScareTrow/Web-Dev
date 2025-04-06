from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["id", "name", "description", "city", "address"]


class VacancySerializer(serializers.Serializer):
    class Meta:
        model = Vacancy
        fields = ["id", "name", "description", "salary", "company_id"]

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()

    def create(self, validated_data):
        company = Company.objects.get(pk=validated_data["company_id"])
        return Vacancy.objects.create(company=company, **validated_data)

    def update(self, instance, validated_data):

        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.salary = validated_data.get("salary", instance.salary)

        company_id = validated_data.get("company_id")
        if company_id:
            instance.company_id = company_id
        instance.save()
        return instance
