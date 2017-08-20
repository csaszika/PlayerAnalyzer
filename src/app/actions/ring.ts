import {Action} from "@ngrx/store";
import {Player, PlayerId} from "../types/player";
import {Ring} from "../types/ring";

export const GET_RINGS = 'GET_RINGS';
export const RINGS_LOADED = 'RINGS_LOADED';

export class GetRings implements Action {
  readonly type = GET_RINGS;

  constructor() {
  }
}

export class RingsLoaded implements Action {
  readonly type = RINGS_LOADED;

  constructor(public payload: Ring[]) {
    console.log('payload', payload);
  }
}

export type Actions = GetRings
  | RingsLoaded;
