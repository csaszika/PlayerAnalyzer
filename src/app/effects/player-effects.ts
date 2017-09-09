import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {GET_PLAYERS, PlayersLoaded} from "../actions/player";

@Injectable()
export class PlayerEffects {

  @Effect()
  loadPlayersEffect$ = this._actions$
    .ofType(GET_PLAYERS)
    .map((action) => new PlayersLoaded([
      {id: 123, name: 'John', speed: 70, agility: 34, power: 99, moral: 87, luck: 56},
      {id: 124, name: 'Tom', speed: 77, agility: 56, power: 65, moral: 87, luck: 77},
      {id: 125, name: 'Michael', speed: 81, agility: 67, power: 78, moral: 76, luck: 88}]));

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
