import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ActivateOne, CompleteOne } from '../store/actions/todo.actions';
import { ITodo } from '../store/models/todo.model';
import {
  getActiveTodos,
  getCompletedTodos,
  ITodoState
} from '../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() completed: boolean;

  todos: Observable<ITodo[]>;

  constructor(private store: Store<ITodoState>) {}

  ngOnInit() {
    this.todos = this.store.pipe(
      select(this.completed ? getCompletedTodos : getActiveTodos)
    );
  }

  onSelect(id: string) {
    this.store.dispatch(
      this.completed ? new ActivateOne(id) : new CompleteOne(id)
    );
  }
}
