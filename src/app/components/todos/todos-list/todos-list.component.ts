import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/interfaces/main.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  subscr!: Subscription;
  constructor(private todosService: TodosService) {}

  todos: Todo[] = [
    // ...could be 100+...
  ]
  
  ngOnInit() {
    this.subscr = this.todosService
      .getList()
      .subscribe(todos => this.todos = todos);
  }

  ngOnDestroy() {
    this.subscr.unsubscribe(); 
  }
}
