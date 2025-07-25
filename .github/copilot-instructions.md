# Copilot Instructions for Ecommerce-Website-with-DJango-React

## Project Architecture
- **Backend:** Django 5.2.4, organized as a multi-app project.
  - `shoppit/`: Main Django project settings and root URLs.
  - `core/`: Custom user model (`CustomUser`), admin configuration.
  - `shop_app/`: Product model, API endpoints (REST framework), business logic.
- **Frontend:** React (to be added; not present yet).
- **API:** Uses Django REST Framework for backend APIs.

## Developer Workflows
- **Environment Setup:**
  - Use `.venv` for Python virtual environment.
  - Install dependencies with `pip install -r requirements.txt`.
- **Database:**
  - Run `python manage.py makemigrations` and `python manage.py migrate` for schema changes.
- **Admin:**
  - Create superuser with `python manage.py createsuperuser`.
  - Access admin at `/admin/`.
- **Development Server:**
  - Start with `python manage.py runserver`.
- **Image Handling:**
  - Uses Pillow for product images (`image` field in `Product`).

## Key Patterns & Conventions
- **Custom User:**
  - Defined in `core/models.py` as `CustomUser`.
  - Registered in admin via `core/admin.py` with extended fields.
  - Set in settings: `AUTH_USER_MODEL = "core.CustomUser"`.
- **Product Model:**
  - Defined in `shop_app/models.py`.
  - Slug auto-generated and made unique in `save()`.
- **REST API:**
  - Serializers in `shop_app/serializers.py`.
  - API endpoints to be added in `shop_app/views.py` and `shop_app/urls.py`.
- **Settings:**
  - All apps registered in `INSTALLED_APPS` in `shoppit/settings.py`.
  - `rest_framework` and `pillow` required.

## Integration Points
- **Frontend/Backend:**
  - React frontend will consume Django REST API endpoints (to be implemented).
- **Static/Media Files:**
  - Static files served via Django; image uploads handled by Pillow.

## Example Workflow
1. Make model changes in `core/models.py` or `shop_app/models.py`.
2. Run migrations and start server.
3. Test via Django admin or API endpoints.
4. Update `requirements.txt` when adding dependencies.

## References
- See `README.md` for setup and command summary.
- Key files: `shoppit/settings.py`, `core/models.py`, `shop_app/models.py`, `requirements.txt`.

---

_If any section is unclear or missing, please provide feedback for improvement._
