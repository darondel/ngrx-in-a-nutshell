/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

export enum TodoActionType {
  ADD_ONE = '[Todo] Add One',
  COMPLETE_ONE = '[Todo] Complete One',
  ACTIVATE_ONE = '[Todo] Activate One'
}

export class AddOne implements Action {
  readonly type = TodoActionType.ADD_ONE;

  constructor(public content: string) {}
}

export class CompleteOne implements Action {
  readonly type = TodoActionType.COMPLETE_ONE;

  constructor(public id: string) {}
}

export class ActivateOne implements Action {
  readonly type = TodoActionType.ACTIVATE_ONE;

  constructor(public id: string) {}
}

export type TodoAction = AddOne | CompleteOne | ActivateOne;
