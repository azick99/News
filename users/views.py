from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.views import View
from .forms import UserCreateForm


class RegisterView(View):
    def get(self, request):
       create_form = UserCreateForm(data=request.POST)
       return render(request,"users/register.html",{"form": create_form})


    def post(self,request):

        create_form = UserCreateForm(data=request.POST)
        if create_form.is_valid():
            create_form.save()
            return redirect("users:login")


        else:
            return render(request,"users/register.html",{"form": create_form})








class LoginView(View):
    def get(self, request):

        return render(request, "users/login.html")