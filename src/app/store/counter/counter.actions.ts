import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createAction } from '../createAction';
import { IAppState } from '../../models/IAppState';

@Injectable()
export class CounterActions {

  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static RESET = 'RESET';

  constructor (private store: Store<IAppState>) {

  }

  // SYNC

  increment() {
    this.store.dispatch(createAction(CounterActions.INCREMENT));
  }

  decrement() {
    this.store.dispatch(createAction(CounterActions.DECREMENT));
  }

  reset() {
    this.store.dispatch(createAction(CounterActions.RESET));
  }

  // ASYNC

  incrementIfOdd() {
    this.store.select(appState => appState.counter.currentValue)
      // .take(1)
      .subscribe(currentValue => {
        if (currentValue % 2 !== 0) {
          this.store.dispatch(createAction(CounterActions.INCREMENT));
        }
      });
  }

  incrementAsync(timeInMs: number = 1000) {
    this.delay(timeInMs).then(() => this.store.dispatch(createAction(CounterActions.INCREMENT)));
  }

  private delay(timeInMs: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve() , timeInMs);
    });
  }

}
