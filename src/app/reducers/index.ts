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

export const getPlayerList = createSelector(getPlayerState, fromPlayer.getPlayerList);
export const getSelectedPlayer = createSelector(getPlayerState, fromPlayer.getSelectedPlayer);

//ring
export const getRingState = (state: State) => state.ring;

export const getRingList = createSelector(getRingState, fromRing.getRingList);
export const getSelectedRing = createSelector(getRingState, fromRing.getSelectedRing);

//user
export const getUserState = (state: State) => state.user;

export const getUserList = createSelector(getUserState, fromUser.getUserList);
export const getSelectedUser = createSelector(getUserState, fromUser.getSelectedUser);
export const getEditedUser = createSelector(getUserState, fromUser.getEditedUser);

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
