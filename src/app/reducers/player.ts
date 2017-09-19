import {Player, PlayerId} from "../types/player";
import {createSelector} from "reselect";
import * as player from '../actions/player/player';
import {PLAYER_SELECTED, PLAYERS_LOADED} from "../actions/player/player-action-types";

export interface State {
  playerList: Player[];
  selectedId: PlayerId | null;
}

export const initialState: State = {
  playerList: [],
  selectedId: null
};

/**
 * This is the old version of Action handling. The issue is that
 * the switch case statement can be too big and then hardly readable.
 * To avoid this issue see the solution in 'user' reducer.
 */
export function reducer (state = initialState, action: player.Actions) : State {

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
  }

  return changed ? {
    playerList: playerList,
    selectedId: selectedId
  } : state;
}
