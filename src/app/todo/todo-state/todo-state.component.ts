import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { TodoState } from '../store/reducers/todo.reducer';
import { AppState, getTodoState } from '../../app.reducer';

@Component({
  selector: 'app-todo-state',
  templateUrl: './todo-state.component.html',
  styleUrls: ['./todo-state.component.css']
})
export class TodoStateComponent implements OnInit {

  state: Observable<TodoState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.state = this.store.pipe(
      select(getTodoState)
    );
  }

}
