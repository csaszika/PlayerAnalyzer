import {Player, PlayerId} from "../../types/player";
import {PlayerActionGroupTypes} from "./player-action-group-types";
import {ADD_PLAYER, GET_PLAYERS, PLAYER_SELECTED, PLAYERS_LOADED} from "./player-action-types";
import {PlayerActionWithGroupType} from "../actions-with-group-type";

export class GetPlayers implements PlayerActionWithGroupType {
  readonly type = GET_PLAYERS;
  readonly groupType = PlayerActionGroupTypes.PlayerListModification;

  constructor(public payload: any = null) {}
}

export class PlayersLoaded implements PlayerActionWithGroupType {
  readonly type = PLAYERS_LOADED;
  readonly groupType = PlayerActionGroupTypes.PlayerListModification;

  constructor(public payload: Player[]) {}
}

export class PlayerSelected implements PlayerActionWithGroupType {
  readonly type = PLAYER_SELECTED;
  readonly groupType = PlayerActionGroupTypes.SelectedPlayerIdModification;

  constructor(public payload: PlayerId) {}
}

export class AddPlayer implements PlayerActionWithGroupType {
  readonly type = ADD_PLAYER;
  readonly groupType = PlayerActionGroupTypes.PlayerListModification;

  constructor(public payload: Player) {}
}

export type Actions = GetPlayers
  | PlayersLoaded
  | AddPlayer
  | PlayerSelected;
