from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.TaskListView.as_view(), name='task-list'),
    url(r'^new/$', views.TaskCreateView.as_view(), name='task-create'),
    url(r'^(?P<pk>[0-9]+)/edit/$', views.TaskUpdateView.as_view(), name='task-edit'),
    url(r'^(?P<pk>[0-9]+)/delete/$', views.TaskDeleteView.as_view(), name='task-delete'),

    url(r'^notes/$', views.NoteListView.as_view(), name='note-list'),
    url(r'^note/new/$', views.NoteCreateView.as_view(), name='note-create'),
    url(r'^note/(?P<pk>[0-9]+)/edit/$', views.NoteUpdateView.as_view(), name='note-edit'),
    url(r'^note/(?P<pk>[0-9]+)/delete/$', views.NoteDeleteView.as_view(), name='note-delete'),
    url(r'^note/(?P<pk>[0-9]+)/$', views.NoteDetailView.as_view(), name='note-detail'),

]
