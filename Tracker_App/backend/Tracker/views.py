from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from django.core import serializers
from .serializers import TaskSerializer, UserSerializer
from .models import *
import json

#Direct to homepage start
def index(request):
    theIndex = open('./static/index.html').read()
    return HttpResponse(theIndex)
#Direct to homepage end

#Sign in/out/up functionality start
@api_view(['POST'])
def signIn(request):
    print(request.data)
    email = request.data["email"]
    password = request.data["password"]
    user=authenticate(username=email, password = password)
    user.is_active= True
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'signIn': True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIn': False})
    else:
        return JsonResponse({'signIn': False})

@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        data=serializers.serialize("json", [request.user], fields=['email'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

def signOut(request):
    try:

        logout(request)
        return JsonResponse({'signOut': True})
    except Exception as e:
        print(e)
        return JsonResponse({'signOut': False})

@api_view(["Post"])
def signUp(request):
    # print(request.data)
    email = request.data["email"]
    password = request.data["password"]
    print(email, password)
    try:
        AppUser.objects.create_user(username=email, email=email, password=password)
        return JsonResponse({'signup': True})
    except Exception as e:
        print(e)
        return JsonResponse({'signup': False})

    return JsonResponse({'signUp success': True})

#Sign in/out/up functionality end



# API handling start
@api_view(['GET'])
def apiOverview(request):

    api_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/'
    }

    return Response(api_urls)


@api_view(['GET'])
def taskList(request):
    users = AppUser.objects.all()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request):
    tasks = AppUser.objects.get(id=request.user.id)
    serializer = UserSerializer(tasks, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    user = AppUser.objects.get(id=request.user.id)
    
    if request.data['type'] == 'anime':
        data = request.data["animeTitle"]
        user.myAnimeList.append(data)
        user.save()
    elif request.data['type'] == 'movie':
        data = request.data["movieTitle"]
        user.myMovieList.append(data)
        user.save()
    
    return JsonResponse({'Loaded':'Success'}) 


@api_view(['POST'])
def taskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE', 'POST'])
def movieDelete(request):
    user = AppUser.objects.get(id=request.user.id)
    data = request.data["movieTitle"]
    user.myMovieList.remove(data)
    user.save()
    

    return Response("Task Deleted!")

@api_view(['DELETE', 'POST'])
def animeDelete(request):
    user = AppUser.objects.get(id=request.user.id)
    data = request.data["animeTitle"]
    user.myAnimeList.remove(data)
    user.save()
    

    return Response("Task Deleted!")


@api_view(['GET'])
def getMovieList(request, id):
    print("movie list loaded")
    return JsonResponse({'Loaded':'Success'})    

@api_view(['POST'])
def addMovieToList(request, email):
    print("movie was added")
    return JsonResponse({'Added':'Success'})


# API handling end