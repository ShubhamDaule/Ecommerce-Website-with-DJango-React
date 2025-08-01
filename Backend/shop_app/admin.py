from django.contrib import admin
from .models import Product


# Register your models here.
admin.site.register(Product)
# This will allow the Product model to be managed through the Django admin interface.