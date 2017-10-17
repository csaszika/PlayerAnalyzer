import {ActionReducerMap} from "@ngrx/store";
import * as fromUser from './user';

export interface FeatureState {
  user: fromUser.State;
}

export const initialState: FeatureState = {
  user: fromUser.initialState,
};


export const reducers: ActionReducerMap<any> = {
  user: fromUser.reducer
};

export const getState = (state: FeatureState) => state;
export const getUserState = (state: FeatureState) => state.user;

export const getUserList = (state: FeatureState) => state.user.userList;
export const getSelectedUser = (state: FeatureState) => state.user.selected;
