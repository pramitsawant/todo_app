from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.TodoListCreateAPIView.as_view(), name='todo_list_create'),    
    path('todos/<int:pk>/', views.TodoRetrieveUpdateDestroyAPIView.as_view(), name='status_update_destroy'),    
]
