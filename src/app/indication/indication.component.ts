import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../store/reducers';
import { getFirstCount, getSecondCount } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent implements OnInit {

  inputValue: number;
  firstCount$: Observable<number>;
  secondCount$: Observable<number>;

  constructor(private store: Store<State>) {
    this.firstCount$ = this.store.pipe(select(getFirstCount));
    this.secondCount$ = this.store.pipe(select(getSecondCount));
  }

  ngOnInit() {
    this.inputValue = 0;
  }

}
