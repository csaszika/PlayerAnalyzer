import * as fromPlayer from './player';
import * as fromRing from './ring';
import {environment} from '../../environments/environment';
import {ActionReducer, ActionReducerMap, combineReducers, compose, createSelector} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';

export interface State {
  player: fromPlayer.State;
  ring: fromRing.State;
}

export const initialState: State = {
  player: fromPlayer.initialState,
  ring: fromRing.initialState,
};

//player
export const getPlayerState = (state: State) => state.player;

// export const getPlayerList = createSelector(getPlayerState, fromPlayer.getPlayerList);
// export const getSelectedPlayer = createSelector(getPlayerState, fromPlayer.getSelectedPlayer);
export const getPlayerList = (state: State) => state.player.playerList;
export const getSelectedPlayerId = (state: State) => state.player.selectedId;
export const getSelectedPlayer = createSelector(getPlayerList, getSelectedPlayerId,
  (playerList, selectedId) => playerList.find((player) => player.id === selectedId));


//ring
export const getRingState = (state: State) => state.ring;

export const getRingList = (state: State) => state.ring.ringList;
export const getSelectedRingId = (state: State) => state.ring.selectedId;
export const getSelectedRing = (state: State) => createSelector(getRingList, getSelectedRingId,
  (ringList, selectedId) => ringList.find((ring) => ring.id === selectedId));

//others
export const reducers: ActionReducerMap<State> = {
  player: fromPlayer.reducer,
  ring: fromRing.reducer,
};
export const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
