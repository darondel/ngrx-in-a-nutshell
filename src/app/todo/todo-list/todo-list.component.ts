import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../store/models/todo.model';
import { ActivateOne, CompleteOne } from '../store/actions/todo.actions';
import { AppState, getAllTodos } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() completed: boolean;

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.todos = this.store.pipe(
      select(getAllTodos),
      map(todos => todos.filter(todo => todo.completed === this.completed))
    );
  }

  onSelect(id: number) {
    this.store.dispatch(this.completed ? new ActivateOne(id) : new CompleteOne(id));
  }

}
