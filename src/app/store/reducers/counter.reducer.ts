import { Action } from '@ngrx/store';

import * as counter from '../actions/counter.actions';


export const counterFeatureKey = 'counter';
const defaultValues = {
  firstCount: -5,
  secondCount: 10
};

export interface State {
  firstCount: number;
  secondCount: number;
}

export const initialState: State = {
  firstCount: defaultValues.firstCount,
  secondCount: defaultValues.secondCount
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case counter.CounterActionTypes.Change:
      return state;
    case counter.CounterActionTypes.Increase:
      return {...state, firstCount: state.firstCount + 1};
    case counter.CounterActionTypes.Decrease:
      return {...state, secondCount: state.secondCount - 1};
    case counter.CounterActionTypes.Reset:
      return {...state, firstCount: defaultValues.firstCount, secondCount: defaultValues.secondCount};
    default:
      return state;
  }
}
