import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getTodoState, TodoState } from '../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-state',
  templateUrl: './todo-state.component.html',
  styleUrls: ['./todo-state.component.css', '../../shared/scrollable-mat-card.css']
})
export class TodoStateComponent implements OnInit {

  state: Observable<TodoState>;

  constructor(private store: Store<TodoState>) {
  }

  ngOnInit() {
    this.state = this.store.pipe(
      select(getTodoState)
    );
  }

}
