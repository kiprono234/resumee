# from django.db import models

# class Resume(models.Model):
#     full_name = models.CharField(max_length=255)
#     email = models.EmailField()
#     phone = models.CharField(max_length=15)
#     address = models.TextField()
#     skills = models.TextField()
#     experience = models.TextField()
#     education = models.TextField()
#     certifications = models.TextField()

#     def __str__(self):
#         return self.full_name
    
from django.db import models
# from .models import Resume


class Resume(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    certifications = models.TextField(blank=True)

    def __str__(self):
        return self.full_name

class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.degree} at {self.institution}"

class Experience(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='experiences')
    company = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} at {self.company}"

class Skill(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
