from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse


def index(request):
    theIndex = open('static/index.html').read()
    print('The INDEX')
    return HttpResponse(theIndex)