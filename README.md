
# Ecommerce Website with Django & React

## Common Commands (Short Reference)
| Command | Purpose |
|--------|---------|
| `python manage.py makemigrations` | Create new migrations based on model changes |
| `python manage.py migrate` | Apply migrations to the database |
| `python manage.py createsuperuser` | Create an admin user for Django admin |
| `python manage.py runserver` | Start the development server |
| `pip install <package>` | Install a Python package |
| `pip install -r requirements.txt` | Install all dependencies |
| `python -m venv .venv` | Create a virtual environment |
| `.venv\Scripts\activate` | Activate the virtual environment (Windows) |


## Project Overview
This project is a full-stack ecommerce web application built using Django (backend) and React (frontend). The backend manages users, products, orders, and authentication, while the frontend will provide a modern, interactive shopping experience.

## Backend Progress
- Django project initialized (`shoppit`)
- Core app for custom user model (`core`)
- Shop app for product management (`shop_app`)
- REST API setup with Django REST Framework
- Pillow installed for image handling
- Database migrations completed
- Superuser created for admin access

## Requirements
- Python 3.13+
- Django 5.2.4
- Django REST Framework
- Pillow
- Other dependencies listed in `requirements.txt`

## Setup & Run Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/ShubhamDaule/Ecommerce-Website-with-DJango-React.git
   cd Ecommerce-Website-with-DJango-React
   ```
2. **Create and activate a virtual environment**
   ```sh
   python -m venv .venv
   .venv\Scripts\activate  # On Windows
   ```
3. **Install dependencies**
   ```sh
   pip install -r requirements.txt
   ```
4. **Apply migrations**
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
5. **Create a superuser for admin access**
   ```sh
   python manage.py createsuperuser
   ```
6. **Run the development server**
   ```sh
   python manage.py runserver
   ```
7. **Access the admin panel**
   - Visit [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) and log in with your superuser credentials.

## Project Structure
- `core/` - Custom user model and admin configuration
- `shop_app/` - Product model and API (to be expanded)
- `shoppit/` - Project settings and URLs
- `requirements.txt` - Python dependencies

## Next Steps
- Start building the React frontend
- Connect React with Django REST API
- Implement product listing, cart, and order features
- Enhance backend APIs for frontend needs

---

**Note:** This README will be updated as the project progresses. Next session will focus on frontend and backend integration.

