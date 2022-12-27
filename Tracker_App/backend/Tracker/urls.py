from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),
    path('signIn/', views.signIn),
    path('signUp/', views.signUp),
    path('signOut/', views.signOut),
    path('current_user', views.curr_user),
    path('add-movie/', views.addMovieToList),
    path('api/overview/', views.apiOverview, name="api-overview"),
    path('api/task-list/', views.taskList, name="task-list"),
    path('api/task-detail/', views.taskDetail, name="task-detail"),
    path('api/task-create/', views.taskCreate, name="task-create"),
    path('api/task-update/<str:pk>/', views.taskUpdate, name="task-update"),
    path('api/movie-delete/', views.movieDelete, name="movie-delete"),
    path('api/anime-delete/', views.animeDelete, name="anime-delete"),
    re_path(r'.*', views.index)
]