import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {GET_PLAYERS, PlayersLoaded} from "../actions/player";

@Injectable()
export class PlayerEffects {

  @Effect()
  loadPlayersEffect$ = this._actions$
    .ofType(GET_PLAYERS)
    .delay(1000)
    .map((action) => new PlayersLoaded([
      {id: 123, name: 'John', speed: 70},
      {id: 124, name: 'Tom', speed: 77},
      {id: 125, name: 'Michael', speed: 81}]));

  // @Effect()
  // loadFeatureEffect$ = this._actions$
  //   .ofType(LOAD_FEATURE)
  //   .map(toPayload)
  //   .delay(1000)
  //   .map((id) => new FeatureLoaded(
  //     {id, name: 'First ' + id, description: 'Desc First ' + id, enabled: true}));

  constructor(private _actions$: Actions) {
  }
}
