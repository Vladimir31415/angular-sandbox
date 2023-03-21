import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { interval, switchMap, takeWhile, tap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-async-task',
  templateUrl: './async-task.component.html',
  styleUrls: ['./async-task.component.scss']
})
export class AsyncTaskComponent {
  @Input() interval: number = 500;
  @Input() name: string = '';
  @Input() progressValue = 0;
  @Output() complete = new EventEmitter()
  @Output() error = new EventEmitter()

  reset = () => this.progressValue = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const self = this;
    const btnElems = this.el.nativeElement.querySelectorAll('.btn-run-task');

    fromEvent(btnElems[0], 'click')
      .pipe(
        switchMap(() => interval(this.interval)
          .pipe(
            takeWhile(() => this.progressValue <= 100),
          )
        ),
        tap(i => this.progressValue+= 20 * Math.random()),
      )
      .subscribe({
        next() {
          if (self.progressValue >= 100) {
            self.complete.next({ name: self.name})
          }
        },
        error() { self.error.next({ name: self.name}) },
      })
  }
}
