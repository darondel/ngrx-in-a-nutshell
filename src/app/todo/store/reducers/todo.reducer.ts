import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodoAction, TodoActionType } from '../actions/todo.actions';
import { ITodo } from '../models/todo.model';

export const todoAdapter = createEntityAdapter<ITodo>();

export interface ITodoState extends EntityState<ITodo> {}

export const initialState: ITodoState = todoAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function todoReducer(
  state = initialState,
  action: TodoAction
): ITodoState {
  switch (action.type) {
    case TodoActionType.ADD_ONE:
      return todoAdapter.addOne(
        {
          id:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
          content: action.content,
          completed: false
        },
        state
      );
    case TodoActionType.COMPLETE_ONE:
      return todoAdapter.updateOne(
        {
          id: action.id,
          changes: {
            completed: true
          }
        },
        state
      );
    case TodoActionType.ACTIVATE_ONE:
      return todoAdapter.updateOne(
        {
          id: action.id,
          changes: {
            completed: false
          }
        },
        state
      );
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<ITodoState>('todo');

export const {
  selectIds: getTodoIds,
  selectEntities: getTodoEntities,
  selectAll: getAllTodos,
  selectTotal: getTotalTodos
} = todoAdapter.getSelectors(getTodoState);

export const getCompletedTodos = createSelector(
  getAllTodos,
  todos => todos.filter(todo => todo.completed)
);
export const getTotalCompletedTodos = createSelector(
  getCompletedTodos,
  todos => todos.length
);

export const getActiveTodos = createSelector(
  getAllTodos,
  todos => todos.filter(todo => !todo.completed)
);
export const getTotalActiveTodos = createSelector(
  getActiveTodos,
  todos => todos.length
);
