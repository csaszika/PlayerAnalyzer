import {Player, PlayerId} from "../types/player";
import {PLAYER_SELECTED, PLAYERS_LOADED} from "../actions/player";
import {createSelector} from "reselect";
import * as player from '../actions/index';
import {Actions, UPDATE_RING_AND_PLAYER} from "../actions/index";

export interface State {
  playerList: Player[];
  selectedId: PlayerId | null;
}

export const initialState: State = {
  playerList: [],
  selectedId: null
};

export function reducer (state = initialState, action: Actions) : State {

  let {playerList, selectedId} = state;
  let changed = false;

  switch (action.type) {
    case PLAYERS_LOADED:
      const players = action.payload as Player[];
      playerList = players;
      changed = true;
      break;
    case PLAYER_SELECTED:
      selectedId = action.payload as PlayerId;
      changed = true;
      break;
    case UPDATE_RING_AND_PLAYER:
      //we can use this action type in other reducers
      break;
  }

  return changed ? {
    playerList: playerList,
    selectedId: selectedId
  } : state;
}

export const getPlayerList = (state: State) => state.playerList;
export const getSelectedPlayerId = (state: State) => state.selectedId;
export const getSelectedPlayer = createSelector(getPlayerList, getSelectedPlayerId,
  (playerList, selectedId) => playerList.find((player) => player.id === selectedId));
