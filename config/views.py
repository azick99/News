from django.shortcuts import render


def home_page(request):
    print(request.COOKIES["example_cookie"])
    return render(request, 'home.html')