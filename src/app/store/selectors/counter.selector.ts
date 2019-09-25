import { createSelector } from '@ngrx/store';

import { State } from '../reducers';


export const selectCounterState = (state: State) => state.counter;

export const getFirstCount = createSelector(
  selectCounterState,
  counter => counter.firstCount
);

export const getSecondCount = createSelector(
  selectCounterState,
  counter => counter.secondCount
);
