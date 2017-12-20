from django import forms

from tasks.helpers import transform_image_in_text
from tasks.models import Task, Note


class TaskForm(forms.ModelForm):
    start_date = forms.DateField(widget=forms.SelectDateWidget())

    class Meta:
        model = Task
        fields = [
            'description', 'start_date', 'is_done'
        ]


class NoteForm(forms.ModelForm):
    image = forms.ImageField()

    class Meta:
        model = Note
        fields = [
            'title', 'image'
        ]

    def save(self):
        note = self.instance
        note.save()
        text = transform_image_in_text(note.image)
        note.description = text
        note.save()
        return note
