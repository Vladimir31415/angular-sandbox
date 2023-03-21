import {  Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/interfaces/main.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor() {}

  @Input() todo!: Todo
  
  time!: Date;
  
  get title(): string {
    console.log('Todo #'+ this.todo.id + ' - Change detection is running...');
    return this.todo.title;
  }

  showTime() {
    this.getTime().subscribe(time => this.time = time);
  }

  getTime(): Observable<Date> {
    return new Observable(observer => {
        observer.next(new Date());
        setInterval(() => observer.next(new Date()), 1000)
    })
  }
}
