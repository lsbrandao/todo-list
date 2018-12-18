import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db: AngularFirestore) { }

  create(todo: Todo) {
    this.db.collection('todos').add(todo);
  }

  fetch(): Observable<Todo[]> {
    return this.db.collection('todos')
    .snapshotChanges()
    .pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data() as Todo
          };
        });
      })
    );
  }

  update(todo: Todo) {
    this.db.doc('/todos/' + todo.id).update(todo);
  }

  addComment(todo: Todo, comment) {
    if (todo.comments) {
      todo.comments.push(comment);
    } else {
      todo.comments = [];
      todo.comments.push(comment);
    }
    this.db.doc('/todos/' + todo.id).update(todo);
  }

  deleteComment(todo: Todo, index) {
    todo.comments.splice(index, 1);
    this.db.doc('/todos/' + todo.id).update(todo);
  }

  deleteTodo(todoId) {
    this.db.doc('/todos/' + todoId).delete();
  }

}
