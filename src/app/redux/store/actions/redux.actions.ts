import { Action } from '@ngrx/store';

import { ReduxSection } from '../models/redux.model';

export enum ReduxActionType {
  SELECT_SECTION = '[Redux] Select Section'
}

export class SelectSection implements Action {
  readonly type = ReduxActionType.SELECT_SECTION;

  constructor(public section: ReduxSection) {
  }
}

export type ReduxAction = SelectSection;
