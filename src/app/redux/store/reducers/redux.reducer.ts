import { ReduxAction, ReduxActionType } from '../actions/redux.actions';
import { ReduxSection } from '../models/redux.model';

export interface ReduxState {
  selectedSection: ReduxSection | null;
}

export const initialState: ReduxState = {
  selectedSection: null
};

export function reduxReducer(state = initialState, action: ReduxAction): ReduxState {
  switch (action.type) {
    case ReduxActionType.SELECT_SECTION:
      return {
        ...state,
        selectedSection: action.section
      };
    default:
      return state;
  }
}

export const getSelectedSection = (state: ReduxState) => state.selectedSection;
