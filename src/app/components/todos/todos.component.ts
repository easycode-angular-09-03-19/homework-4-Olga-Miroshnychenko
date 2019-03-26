import {Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @ViewChild('addTodoForm') form: NgForm;
  public newTask: Task = {
    id: null,
    text: '',
    completed: false
  };
// Arbitrary list of tasks
  public Tasks = [{
    id: 1,
    text: 'Clean home',
    completed: false
  },
    {
      id: 2,
      text: 'Do exercises',
      completed: true
    },
    {
      id: 3,
      text: 'Go for a walk',
      completed: false
    },
    {
      id: 4,
      text: 'Do exercises',
      completed: false
    }
  ];
  constructor() {
  }
  ngOnInit() {
  }
  // Method Delete Task
  onOutputDelete(item) {
    if (confirm('Are you sure to delete this task') === true) {
      const index = this.Tasks.indexOf(item);
      return this.Tasks.splice(index, 1);
    } else {
      alert('You pressed cancel');
    }
  }
// Method Complete Task
  onOutputComplete(item) {
    if (item.completed === false) {
      item.completed = true;
      alert('Your task is complete');
    } else {
      alert('You can`t complete task.Task did');
    }
  }
// Method Complete All Tasks
  completeAllTasks() {
    this.Tasks.map((item: Task): void => {
      item.completed = true;
    });
  }
  // Method Add New Task
  onSubmit(form) {
    const newTask: Task = {
      id: this.Tasks.length + 1,
      text: form.value.text,
      completed: false
    };
    this.Tasks.push(newTask);
    this.form.resetForm();
  }
}



