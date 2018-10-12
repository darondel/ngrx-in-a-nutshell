import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { getSelectedSection, reduxReducer, ReduxState } from './redux/store/reducers/redux.reducer';
import { todoAdapter, todoReducer, TodoState } from './todo/store/reducers/todo.reducer';

export interface AppState {
  redux: ReduxState;
  todo: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  redux: reduxReducer,
  todo: todoReducer
};

export const getReduxState = createFeatureSelector<AppState, ReduxState>('redux');
export const getReduxSelectedSection = createSelector(getReduxState, getSelectedSection);
export const isReduxSectionSelected = createSelector(
  getReduxSelectedSection,
  (selectedSection, props) => selectedSection === props.section
);

export const getTodoState = createFeatureSelector<AppState, TodoState>('todo');
export const {
  selectIds: getTodoIds,
  selectEntities: getTodoEntities,
  selectAll: getAllTodos,
  selectTotal: getTotalTodos
} = todoAdapter.getSelectors(getTodoState);
export const getTotalCompletedTodos = createSelector(getAllTodos, todos => todos.filter(todo => todo.completed).length);
export const getTotalActiveTodos = createSelector(getAllTodos, todos => todos.filter(todo => !todo.completed).length);
