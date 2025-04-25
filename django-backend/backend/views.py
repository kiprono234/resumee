from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .models import Education
from .serializers import EducationSerializer
from .models import Resume
from .serializers import ResumeSerializer
from .serializers import ExperienceSerializer
from .models import Experience
from .models import Skill
from .serializers import SkillSerializer
from .serializers import ProjectSerializer
from .models import Project

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    def perform_create(self, serializer):
        resume = Resume.objects.get(id=self.kwargs['resume_pk'])
        serializer.save(resume=resume)

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    def perform_create(self, serializer):
        resume = Resume.objects.get(id=self.kwargs['resume_pk'])
        serializer.save(resume=resume)