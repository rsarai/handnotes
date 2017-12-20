from django.urls import reverse_lazy
from django.views import generic

from tasks.forms import TaskForm, NoteForm
from tasks.models import Task, Note


class TaskListView(generic.ListView):
    template_name = 'tasks/tasks_list.html'

    def get_queryset(self):
        return Task.objects.all()


class TaskCreateView(generic.CreateView):
    template_name = 'tasks/tasks_form.html'
    form_class = TaskForm

    def get_success_url(self):
        return reverse_lazy('task-list')


class TaskUpdateView(generic.UpdateView):
    template_name = 'tasks/tasks_form.html'
    form_class = TaskForm
    model = Task

    def get_success_url(self):
        return reverse_lazy('task-list')


class TaskDeleteView(generic.DeleteView):
    model = Task

    def get_success_url(self):
        return reverse_lazy('task-list')


class NoteCreateView(generic.CreateView):
    template_name = 'notes/notes_form.html'
    form_class = NoteForm

    def get_success_url(self):
        return reverse_lazy('task-list')


class NoteListView(generic.ListView):
    template_name = 'notes/notes_list.html'

    def get_queryset(self):
        return Note.objects.all()


class NoteUpdateView(generic.UpdateView):
    template_name = 'notes/notes_form.html'
    form_class = TaskForm
    model = Task

    def get_success_url(self):
        return reverse_lazy('task-list')


class NoteDeleteView(generic.DeleteView):
    model = Note

    def get_success_url(self):
        return reverse_lazy('task-list')


class NoteDetailView(generic.DetailView):
    model = Note
    template_name = 'notes/note_detail.html'
    context_object_name = 'note'
