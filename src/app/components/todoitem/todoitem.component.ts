import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;
  commentForm = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  expand = false;
  addComment = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onAddComment() {
    this.todoService.addComment(this.todo, this.commentForm.value.comment);
  }

  onDeleteComment(todo, index) {
    this.todoService.deleteComment(todo, index);
  }

  onDeleteTodo(todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
