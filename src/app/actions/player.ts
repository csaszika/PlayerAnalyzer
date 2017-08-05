import {Action} from "@ngrx/store";
import {Player} from "../types/player";

export const GET_PLAYERS = 'GET_PLAYER';
export const PLAYERS_LOADED = 'PLAYERS_LOADED';
export const ADD_PLAYER = 'ADD_PLAYER';

export class GetPlayers implements Action {
  readonly type = GET_PLAYERS;

  constructor() {
  }
}

export class PlayersLoaded implements Action {
  readonly type = PLAYERS_LOADED;

  constructor(public payload: Player[]) {
  }
}

export class AddPlayer implements Action {
  readonly type = ADD_PLAYER;

  constructor(public payload: Player) {
  }
}

export type Any = GetPlayers
  | PlayersLoaded
  | AddPlayer;
