import { TodosService } from './../../../services/todos.service';
import { Component, ViewChildren, EventEmitter } from '@angular/core';
import { forkJoin, zip, switchMap, from, mergeMap } from 'rxjs';
import { AsyncTaskComponent } from '../async-task/async-task.component';


@Component({
  selector: 'app-parallel-tasks',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TaskListComponent {
  @ViewChildren('asyncTask') tasksList: any;

  tasks = [
    {name: 'Task 1', interval: 500},
    {name: 'Task 2', interval: 600},
    {name: 'Task 3', interval: 700},
  ];

  // -- an array of all 'complete' outputs -- 
  tasksCompleteness: Array<EventEmitter<any>> = []

  onTaskComplete(e: {name: string}) {
    console.log('Completed:', e);
  }

  ngAfterViewInit() {
    this.tasksCompleteness = this.tasksList.map((element: AsyncTaskComponent) => element.complete);    

    // zip(this.tasksCompleteness).subscribe(() => console.log('All tasks are done!'));
  
  }
}
