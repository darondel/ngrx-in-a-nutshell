import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer
};
