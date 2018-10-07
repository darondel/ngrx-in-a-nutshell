import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, getTotalActiveTodos } from '../../app.reducer';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.counter = this.store.pipe(
      select(getTotalActiveTodos)
    );
  }

}
