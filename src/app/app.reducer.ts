import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { getSelectedSection, reduxReducer, ReduxState } from './redux/store/reducers/redux.reducer';

export interface AppState {
  redux: ReduxState;
}

export const reducers: ActionReducerMap<AppState> = {
  redux: reduxReducer
};

export const getReduxState = createFeatureSelector<AppState, ReduxState>('redux');
export const getReduxSelectedSection = createSelector(getReduxState, getSelectedSection);
export const isReduxSectionSelected = createSelector(
  getReduxSelectedSection,
  (selectedSection, props) => selectedSection === props.section
);
