from rest_framework import serializers
from .models import Task

# añadir el modelo al api


class CreateTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'
