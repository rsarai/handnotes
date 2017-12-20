import uuid
from django.db import models

from common.models import IndexedTimeStampedModel

from PIL import Image
from io import StringIO

from django.core.files.base import ContentFile
from django.db.models import ImageField
from django.db.models.fields.files import ImageFieldFile


class JPEGImageFieldFile(ImageFieldFile):

    def save(self, name, content, save=True):
        if content:
            image = Image.open(content)
            if image.mode not in ('L', 'RGB'):
                image = image.convert("RGB")
            buf = StringIO()
            image.save(buf, format="JPEG")
            new_content_str = buf.getvalue()
            content = ContentFile(new_content_str)

        return super(JPEGImageFieldFile, self).save(name, content, save)


class JPEGImageField(ImageField):
    """
    ImageField that converts all images to JPEG on save.
    """
    attr_class = JPEGImageFieldFile


def photo_upload_path(note, filename):
    """Function that generates the path and filename of each meal photo uploaded."""
    path = 'notes/'
    path += uuid.uuid4().hex + '_'  # necessary to prevent filename clashes
    path += str(filename)
    return path[:1024]  # S3 max filename length is 1024


class Task(IndexedTimeStampedModel):
    description = models.CharField(max_length=1000, default="")
    start_date = models.DateField()
    is_done = models.BooleanField(default=False)

    def __str__(self):
        return self.description


class Note(IndexedTimeStampedModel):
    title = models.CharField(max_length=255, default="")
    description = models.CharField(max_length=5000, null=True)
    image = models.ImageField(upload_to=photo_upload_path, max_length=1024)

    def __str__(self):
        return self.title
