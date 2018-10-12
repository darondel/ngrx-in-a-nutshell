import { Action } from '@ngrx/store';

import { ReduxSection } from '../models/redux.model';

export enum ReduxActionType {
  SELECT_SECTION = '[Redux] Select Section',
  UNSELECT_SECTION = '[Redux] Unselect Section'
}

export class SelectSection implements Action {
  readonly type = ReduxActionType.SELECT_SECTION;

  constructor(public section: ReduxSection) {
  }
}

export class UnselectSection implements Action {
  readonly type = ReduxActionType.UNSELECT_SECTION;

  constructor(public section: ReduxSection) {
  }
}

export type ReduxAction = SelectSection | UnselectSection;
