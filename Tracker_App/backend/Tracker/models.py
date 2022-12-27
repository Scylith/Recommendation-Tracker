from django.db import models
from django.contrib.auth.models import (AbstractUser)
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class AppUser(AbstractUser):
    #user account model
    myMovieList = ArrayField(models.CharField(max_length=500, blank=True), default=list)
    myAnimeList = ArrayField(models.CharField(max_length=500, blank=True), default=list)

    email = models.EmailField(
        max_length=255,
        unique=True,
    )

    first_name= models.CharField(max_length=200)
    last_name= models.CharField(max_length=200)
    

    is_active = models.BooleanField(
        default=True,
        help_text='Designates whete this use is active or not',
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Task(models.Model):
    #model for tasks that will be created
    title = models.CharField(max_length=200)
    task_type = models.CharField(max_length=200, blank=True, null=True)
    completed = models.BooleanField(default=False, blank=True, null=True)
    user = models.ForeignKey(AppUser, on_delete=models.DO_NOTHING, blank=True, null=True)

    def __str__(self):
        return self.title