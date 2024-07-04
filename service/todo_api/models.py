from django.db import models

TODO = "todo"
DONE = "done"
IN_PROGRESS = "in_progress"
ARCHIVE = "archived"

STATUS_CHOICES = {
    TODO: "To DO",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
    ARCHIVE: "Archived",
}

# Create your models here.
from django.db import models

class Status(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    def __str__(self):
        return self.title    


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    status = models.CharField(
            max_length=11,
            choices=STATUS_CHOICES,
            default=TODO,
    )    
    # last_name = models.CharField(max_length=30) 
    # pub_date = models.DateField()
    # pub_date = models.DateField()
    # status = models.ForeignKey(Status, on_delete=models.CASCADE)
    def __str__(self):
        return "{0} - {1}".format(self.title,self.status)
    