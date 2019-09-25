import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Change = '[Counter] Change Counters',
  Increase = '[Counter] Increase Counters',
  Decrease = '[Counters] Decrease Counters',
  Reset = '[Counters] Reset Counters',
}

export class ChangeCounters implements Action {
  readonly type = CounterActionTypes.Change;
}

export class IncreaseCounters implements Action {
  readonly type = CounterActionTypes.Increase;
}

export class DecreaseCounters implements Action {
  readonly type = CounterActionTypes.Decrease;
}
export class ResetCounters implements Action {
  readonly type = CounterActionTypes.Reset;
}


export type CounterActions
  = ChangeCounters
  | IncreaseCounters
  | DecreaseCounters
  | ResetCounters;
