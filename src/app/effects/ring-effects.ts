import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {GET_RINGS, RingsLoaded} from "../actions/ring";
import {Http} from "@angular/http";
import {Ring} from "../types/ring";
import {toRoman} from 'roman-numerals';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';

@Injectable()
export class RingEffects {

  @Effect()
  loadRingsEffect$ = this.actions$
    .ofType(GET_RINGS)
    .switchMap(() =>
      this.http.get('assets/json/rings.json')
        .map(res => res.json())
        .map(data => {
          let rings = <Ring[]>data['rings'].sort((a, b) => {
            return b.id - a.id;
          });
          rings.forEach(ring => {
            ring.roman = toRoman(ring.id);
          });
          this.store.dispatch(new RingsLoaded(rings));
        }));

  constructor(private actions$: Actions, private http: Http, private store: Store<fromRoot.State>) {
  }
}

