import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getTodoState, ITodoState } from '../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-state',
  templateUrl: './todo-state.component.html',
  styleUrls: ['./todo-state.component.css']
})
export class TodoStateComponent implements OnInit {
  state: Observable<ITodoState>;

  constructor(private store: Store<ITodoState>) {}

  ngOnInit() {
    this.state = this.store.pipe(select(getTodoState));
  }
}
