from django.conf.urls import url
from semantico import views

urlpatterns = [
    url(r'^detalles/$', views.detalles),
]