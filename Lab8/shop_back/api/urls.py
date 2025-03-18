from django.urls import path

from . import views

urlpatterns = [
    path("products/", views.product_list,),
    path("products/<int:product_id>", views.product_by_id,),
    path("categories/", views.category_list),
    path("categories/<int:category_id>", views.category_by_id),
    path("categories/<int:category_id>/products", views.category_products),
    path("",views.index),
]