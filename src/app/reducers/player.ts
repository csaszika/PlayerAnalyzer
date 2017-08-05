import {Action} from '@ngrx/store';
import {Player, PlayerId} from "../types/player";
import {PLAYERS_LOADED} from "../actions/player";
import {createSelector} from "reselect";

export interface State {
  playerList: Player[];
  selectedId: PlayerId | null;
}

export const initialState: State = {
  playerList: [],
  selectedId: null
};

export const reducer = (state = initialState, action: Action) => {

  let {playerList, selectedId} = state;
  let changed = false;

  switch (action.type) {
    case PLAYERS_LOADED:
      const players = action.payload as Player[];
      playerList = players;
      changed = true;
  }

  return changed ? {
    playerList: playerList,
    selectedId: selectedId
  } : state;
};

export const getPlayerList = (state: State) => state.playerList;
export const getSelectedPlayerId = (state: State) => state.selectedId;
export const getSelectedPlayer = createSelector(getPlayerList, getSelectedPlayerId,
  (playerList, selectedId) => playerList.find((player) => player.id === selectedId));
