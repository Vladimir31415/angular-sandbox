import { ArrayToRequestsComponent } from './components/array-to-requests/array-to-requests.component';
import { AppRoutingModule } from './app.routing.module';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { AsyncTaskComponent } from './components/parallel-tasks/async-task/async-task.component';
import { TaskListComponent } from './components/parallel-tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoComponent,
    TaskListComponent,
    AsyncTaskComponent,
    ArrayToRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
