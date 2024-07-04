from django.shortcuts import render
from rest_framework import generics

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView


from .models import Todo, Status
from .serializers import TodoSerializer, StatusSerializer


# class TodoView(APIView):
#     def get(self, request):
#         todos = Todo.objects.all()
#         serial = TodoSerializer(todos, many=True)
#         # person = {"name":"Pramit"}
#         return Response(serial.data)
        
#     def post(self, request):
#         serial = TodoSerializer(data=request.data)
#         if serial.is_valid():
#             serial.save()
#             return Response(serial.data)
#         else:
#             return Response(serial.errors) 

class TodoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
        
class TodoRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# class StatusListCreateAPIView(generics.ListCreateAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer

# class StatusRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer