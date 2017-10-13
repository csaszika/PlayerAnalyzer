import {Player, PlayerId} from "../../types/player";
import {ADD_PLAYER, GET_PLAYERS, PLAYER_SELECTED, PLAYERS_LOADED} from "./player-action-types";
import {PlayerActionWithGroupType} from "../actions-with-group-type";
import {State} from "../../reducers/player";

export class GetPlayers implements PlayerActionWithGroupType {
  readonly type = GET_PLAYERS;

  constructor(public payload: any = null) {}

  execute(state: State, action: Actions):State {
    //implemented in effect
    return state;
  }
}

export class PlayersLoaded implements PlayerActionWithGroupType {
  readonly type = PLAYERS_LOADED;

  constructor(public payload: Player[]) {}

  execute(state: State, action: Actions):State {
    return {
      ...state,
      playerList: action.payload as Player[]
    }
  }
}

export class PlayerSelected implements PlayerActionWithGroupType {
  readonly type = PLAYER_SELECTED;

  constructor(public payload: PlayerId) {}

  execute(state: State, action: Actions):State {
    return {
      ...state,
      selectedId: action.payload
    }
  }
}

export class AddPlayer implements PlayerActionWithGroupType {
  readonly type = ADD_PLAYER;

  constructor(public payload: Player) {}

  execute(state: State, action: Actions):State {
    return {
      ...state,
      playerList: [...state.playerList, action.payload as Player]
    }
  }
}

export type Actions = GetPlayers
  | PlayersLoaded
  | AddPlayer
  | PlayerSelected;
