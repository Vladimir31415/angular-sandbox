import { Component } from '@angular/core';
import { Observable, switchMap, Subscription, from } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-array-to-requests',
  templateUrl: './array-to-requests.component.html',
  styleUrls: ['./array-to-requests.component.scss']
})
export class ArrayToRequestsComponent {
  sourceArray: number[] = [];
  resultArray: Array<any> = [];

  subscription$!: Subscription;

  constructor(private tasksService: TodosService) {}

  generateArrayWithNumbers(length: number = 3): Array<number> {
    const arr = [];
    for(let i = 0; i < length; i++ ) {
      arr.push(+(Math.random() * 100).toFixed());
    }
    return arr;
  } 

  convertToRequest() {
    this.resultArray = [];
    this.subscription$ = from(this.sourceArray)
      .pipe(
       // get todos using TodosService
      )
      .subscribe(todo => this.resultArray.push(todo))
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
