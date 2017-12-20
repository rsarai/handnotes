web: gunicorn handnotes.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app=handnotes --loglevel=info
