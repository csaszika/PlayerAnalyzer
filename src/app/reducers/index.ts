import * as fromPlayer from './player';
import {environment} from '../../environments/environment';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core';
import {storeFreeze} from 'ngrx-store-freeze';
import {createSelector} from 'reselect';

export const reducers = { player: fromPlayer.reducer};

export interface State {
  player: fromPlayer.State;
}

export const initialState: State = {
  player: fromPlayer.initialState
};
export const getPlayerState = (state: State) => state.player;

export const getPlayerList = createSelector(getPlayerState, fromPlayer.getPlayerList);
export const getSelectedPlayer = createSelector(getPlayerState, fromPlayer.getSelectedPlayer);

export const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
