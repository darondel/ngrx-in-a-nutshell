import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import { ActivateOne, CompleteOne, TodoActionType } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {

  @Effect({dispatch: false})
  completeOne = this.actions.pipe(
    ofType<CompleteOne>(TodoActionType.COMPLETE_ONE),
    map(() => this.snackBar.open('Hurrah!', 'Close', {
      duration: 2000
    }))
  );

  @Effect({dispatch: false})
  activateOne = this.actions.pipe(
    ofType<ActivateOne>(TodoActionType.ACTIVATE_ONE),
    map(() => this.snackBar.open('Huh...', 'Close', {
      duration: 2000
    }))
  );

  constructor(private actions: Actions, private snackBar: MatSnackBar) {
  }

}
