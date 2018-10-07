import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { TodoAction, TodoActionType } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

export const todoAdapter = createEntityAdapter<Todo>();

export interface TodoState extends EntityState<Todo> {
}

export const initialState: TodoState = todoAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function todoReducer(state = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionType.ADD_ONE:
      return todoAdapter.addOne({
        id: Math.random(),
        content: action.content,
        completed: false
      }, state);
    case TodoActionType.COMPLETE_ONE:
      return todoAdapter.updateOne({
        id: action.id,
        changes: {
          completed: true
        }
      }, state);
    case TodoActionType.ACTIVATE_ONE:
      return todoAdapter.updateOne({
        id: action.id,
        changes: {
          completed: false
        }
      }, state);
    default:
      return state;
  }
}
