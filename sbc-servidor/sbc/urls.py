from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from django.conf.urls import url, include
from semantico import views



urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('semantico.urls')),
]