# Ecommerce Website with Django & React

## Common Commands (Short Reference)
| Command | Purpose |
|--------|---------|
| `python manage.py makemigrations` | Create new migrations based on model changes |
| `python manage.py migrate` | Apply migrations to the database |
| `python manage.py createsuperuser` | Create an admin user for Django admin |
| `python manage.py runserver` | Start the Django development server |
| `pip install <package>` | Install a Python package |
| `pip install -r requirements.txt` | Install all Python dependencies |
| `python -m venv .venv` | Create a virtual environment |
| `.venv\Scripts\activate` | Activate the virtual environment (Windows) |
| `npm install` | Install React project dependencies |
| `npm run dev` or `yarn dev` | Start the React development server (Vite) |
| `npm run build` | Build the React project for production |
| `npm run preview` | Preview the production build locally |

## Project Overview
This project is a full-stack ecommerce web application built using Django (backend) and React (frontend). The backend manages users, products, orders, and authentication, while the frontend provides a modern, interactive shopping experience.

## Backend Progress
- Django project initialized (`shoppit`)
- Core app for custom user model (`core`)
- Shop app for product management (`shop_app`)
- REST API setup with Django REST Framework
- Pillow installed for image handling
- Database migrations completed
- Superuser created for admin access

## Frontend Progress (Today's Work)
- React app scaffolded in `shoppit_app` using Vite
- Bootstrap and React Icons integrated for UI
- Main layout (`MainLayout.jsx`) with `NavBar` and `Footer` components
- Routing set up with React Router (`App.jsx`)
- Home page and NotFound page implemented
- Fixed import path issues and ensured all UI components render correctly
- Verified Bootstrap is loaded via `main.jsx` and `package.json`
- Added product card and header components for homepage

## Requirements
- Python 3.13+
- Django 5.2.4
- Django REST Framework
- Pillow
- Node.js 18+
- React 19+
- Vite
- Other dependencies listed in `requirements.txt` and `shoppit_app/package.json`

## Setup & Run Steps

### Backend (Django)
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
6. **Run the Django development server**
   ```sh
   python manage.py runserver
   ```
7. **Access the admin panel**
   - Visit [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) and log in with your superuser credentials.

### Frontend (React)
1. **Scaffold the React project using Vite (if not already done)**
   ```sh
   npm create vite
   # Enter project name: shoppit_app
   # Select framework: React
   # Select variant: JavaScript
   ```
2. **Navigate to the React app folder**
   ```sh
   cd shoppit_app
   ```
3. **Install React dependencies**
   ```sh
   npm install
   ```
4. **Start the React development server**
   ```sh
   npm run dev
   ```
   - Visit [http://localhost:5173/](http://localhost:5173/) to view the React frontend.

5. **Build for production**
   ```sh
   npm run build
   ```
6. **Preview production build**
   ```sh
   npm run preview
   ```

## Project Structure
- `core/` - Custom user model and admin configuration
- `shop_app/` - Product model and API
- `shoppit/` - Django project settings and URLs
- `shoppit_app/` - React frontend (Vite, components, layouts)
- `requirements.txt` - Python dependencies
- `package.json` (root & shoppit_app) - Node/React dependencies

## Next Steps
- Expand React frontend: product listing, cart, and order features
- Connect React with Django REST API
- Enhance backend APIs for frontend needs
- Add authentication and user profile features

---

**Note:** This README will be updated as the project progresses. Today's session focused on React setup, UI component rendering, and fixing