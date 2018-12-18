import { Component, OnInit } from '@angular/core';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todoList$: Observable<Todo[]>;
  newTodoForm = new FormGroup({
    todoTitle: new FormControl('', Validators.required)
  });

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList$ = this.todoService.fetch();
  }

  onSubmit() {
    this.todoService.create({title: this.newTodoForm.value.todoTitle});
  }
}
