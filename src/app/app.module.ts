import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { FilterPipe } from './pipes/filter.pipe';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { environment } from '../environments/environment';
import { CommentFilterPipe } from './pipes/comment-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TodoitemComponent,
    CommentFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
