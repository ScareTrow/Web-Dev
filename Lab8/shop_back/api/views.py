from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


@api_view(["GET"])
def product_list(request):

    products = Product.objects.all()

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def product_by_id(request, product_id):

    product = get_object_or_404(Product, id=product_id)

    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(["GET"])
def category_list(request):

    categories = Category.objects.all()

    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def category_by_id(request, category_id):

    category = get_object_or_404(Category, id=category_id)

    serializer = CategorySerializer(category)
    return Response(serializer.data)


@api_view(["GET"])
def category_products(request, category_id):

    category = get_object_or_404(Category, id=category_id)

    products = category.products.all()

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


def index(request):
    return HttpResponse("Okay, project is available")
