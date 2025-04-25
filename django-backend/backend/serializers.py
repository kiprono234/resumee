from rest_framework import serializers
from .models import Resume, Education, Experience, Skill, Project
from .models import Skill

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'
        read_only_fields = ['id']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'resume': {'required': False}
        }
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'resume': {'required': False}
        }
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'resume': {'required': False}
        }
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'resume': {'required': False}
        }
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ResumeViewSet
#