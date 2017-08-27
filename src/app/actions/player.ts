import {Action} from "@ngrx/store";
import {Player, PlayerId} from "../types/player";

export const GET_PLAYERS = 'GET_PLAYERS';
export const PLAYERS_LOADED = 'PLAYERS_LOADED';
export const PLAYER_SELECTED = 'PLAYER_SELECTED';
export const ADD_PLAYER = 'ADD_PLAYER';

export class GetPlayers implements Action {
  readonly type = GET_PLAYERS;

  constructor() {}
}

export class PlayersLoaded implements Action {
  readonly type = PLAYERS_LOADED;

  constructor(public payload: Player[]) {}
}

export class PlayerSelected implements Action {
  readonly type = PLAYER_SELECTED;

  constructor(public payload: PlayerId) {}
}

export class AddPlayer implements Action {
  readonly type = ADD_PLAYER;

  constructor(public payload: Player) {}
}

export type Actions = GetPlayers
  | PlayersLoaded
  | AddPlayer
  | PlayerSelected;
