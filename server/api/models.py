from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(
        max_length=20,
        default='',
        unique=False,
    )
    surname = models.CharField(
        max_length=20,
        default='',
        unique=False,
    )
    patronym = models.CharField(
        max_length=20,
        default='',
        unique=False,
    )

    