import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import * as counter from '../actions/counter.actions';


@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  changeCounters$ = this.actions$
    .pipe(ofType<counter.ChangeCounters>(counter.CounterActionTypes.Change))
    .pipe(switchMap(() => {
      return [
        new counter.IncreaseCounters(),
        new counter.DecreaseCounters(),
        new counter.DecreaseCounters()
      ];
    })
  );
}
