# Ecommerce Website with Django & React

This project is a full-stack ecommerce web application, now organized into separate `Backend` and `Frontend` folders for clarity and maintainability.

---

## 📁 Project Structure

```
Backend/
  core/
  shop_app/
  shoppit/
  manage.py
  requirements.txt
  db.sqlite3
  .env
  media/
Frontend/
  shoppit_app/
    src/
    public/
    package.json
    vite.config.js
    .gitignore
README.md
LICENSE
.github/
```

---

## ⚙️ Common Commands (Short Reference)

| Command                        | Purpose                                         |
|--------------------------------|-------------------------------------------------|
| `python manage.py makemigrations` | Create new migrations based on model changes   |
| `python manage.py migrate`        | Apply migrations to the database               |
| `python manage.py createsuperuser`| Create an admin user for Django admin          |
| `python manage.py runserver`      | Start the Django development server            |
| `pip install -r requirements.txt` | Install all Python dependencies                |
| `python -m venv .venv`            | Create a virtual environment                   |
| `.venv\Scripts\activate`          | Activate the virtual environment (Windows)     |
| `npm install`                     | Install React project dependencies             |
| `npm run dev`                     | Start the React development server (Vite)      |
| `npm run build`                   | Build the React project for production         |
| `npm run preview`                 | Preview the production build locally           |

---

## 🛠️ Backend Setup (`Backend/`)

1. **Navigate to the backend folder**
   ```sh
   cd Backend
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

---

## 🖥️ Frontend Setup (`Frontend/`)

1. **Navigate to the frontend folder**
   ```sh
   cd Frontend/shoppit_app
   ```
2. **Install React dependencies**
   ```sh
   npm install
   ```
3. **Start the React development server**
   ```sh
   npm run dev
   ```
   - Visit [http://localhost:5173/](http://localhost:5173/) to view the React frontend.

4. **Build for production**
   ```sh
   npm run build
   ```
5. **Preview production build**
   ```sh
   npm run preview
   ```

---

## 🚀 Today's Progress

- Project reorganized into `Backend` and `Frontend` folders.
- Fetching and rendering products on the homepage (React).
- Added loading skeletons for products on the homepage.
- Fixed React import errors (`useState`, `api` usage).
- Ensured `BASE_URL` is defined and imported for image rendering.
- Updated `HomeCard.jsx` to use correct image URLs.
- Verified API requests and product data loading in `HomePage.jsx`.
- Confirmed product cards render with images and details.
- Debugged and resolved issues with missing dependencies and config.

---

## 📌 Next Steps

- Expand React frontend: product listing, cart, and order features.
- Connect React with Django REST API.
- Enhance backend APIs for frontend needs.
- Add authentication and user profile features.

---

**Note:** This README will be updated as the project progresses. Today's session focused on project reorganization, React API integration, image rendering, and debugging frontend issues.