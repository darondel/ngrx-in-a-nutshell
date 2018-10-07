import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { todoAdapter, todoReducer, TodoState } from './todo/store/reducers/todo.reducer';

export interface AppState {
  todo: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer
};

export const getTodoState = createFeatureSelector<AppState, TodoState>('todo');
export const {
  selectIds: getTodoIds,
  selectEntities: getTodoEntities,
  selectAll: getAllTodos,
  selectTotal: getTotalTodos
} = todoAdapter.getSelectors(getTodoState);
export const getTotalCompletedTodos = createSelector(getAllTodos, todos => todos.filter(todo => todo.completed).length);
export const getTotalActiveTodos = createSelector(getAllTodos, todos => todos.filter(todo => !todo.completed).length);
