import * as fromPlayer from './player';
import * as fromRing from './ring';
import * as fromUser from './user';
import {environment} from '../../environments/environment';
import {ActionReducer, ActionReducerMap, combineReducers, compose} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {createSelector} from 'reselect';

export interface State {
  player: fromPlayer.State;
  ring: fromRing.State;
  user: fromUser.State;
}

export const initialState: State = {
  player: fromPlayer.initialState,
  ring: fromRing.initialState,
  user: fromUser.initialState
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
export const getSelectedRing = createSelector(getRingList,getSelectedRingId,
  (ringList, selectedId) => ringList.find((ring) => ring.id === selectedId));

//user
export const getUserState = (state: State) => state.user;

export const getUserList = (state: State) => state.user.userList;
export const getSelectedUser = (state: State) => state.user.selected;
export const getEditedUser = (state: State) => state.user.edited;

//others
export const reducers: ActionReducerMap<State> = {
  player: fromPlayer.reducer,
  ring: fromRing.reducer,
  user: fromUser.reducer
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
