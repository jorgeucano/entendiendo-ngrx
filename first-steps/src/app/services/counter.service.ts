import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../models/IAppState';

@Injectable()
export class CounterService {

  constructor( private store: Store<IAppState> ) { }

  getCurrentValue(): Observable<number> {
    return this.store.select(appState => appState.counter.currentValue)
                  .filter(Boolean);
  }
}
