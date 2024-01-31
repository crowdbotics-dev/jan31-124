from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import SlackViewSet

router = DefaultRouter()
router.register("slack", SlackViewSet, basename="slack")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
