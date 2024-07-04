from rest_framework import serializers
from .models import Todo, Status


        
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = "__all__"


class TodoSerializer(serializers.ModelSerializer):
    # status_id = serializers.IntegerField(required=True)
    # status = StatusSerializer(read_only=True)
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', "status" ]        
