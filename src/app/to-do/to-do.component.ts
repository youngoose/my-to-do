import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  todoControl = new FormControl('', [Validators.required]);

  todos = [];

  addTask(task: string) {
    this.todos.push({ task, completed: false });
    this.todoControl.reset();
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTask(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
