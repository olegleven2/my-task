import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, timer } from 'rxjs';

import { State } from './store/reducers';
import { ChangeCounters, ResetCounters } from './store/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;

  constructor(private store: Store<State>) {}

  onStart(): void {
    if (!this.subscription || (this.subscription && this.subscription.closed)) {
      this.subscription = timer(1000, 1000).subscribe(t => {
        this.store.dispatch(new ChangeCounters());
      });
    }
  }

  onStop(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  onReset(): void {
    this.store.dispatch(new ResetCounters());
  }
}
