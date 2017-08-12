import { Action } from '@ngrx/store';

export function createAction(type, payload?): Action {
  return { type, payload };
}
