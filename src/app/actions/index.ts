import * as player from './player';
import * as ring from './ring';
import {Action} from "@ngrx/store";

export const UPDATE_RING_AND_PLAYER = 'UPDATE_RING_AND_PLAYER';

export class UpdateRingAndPlayer implements Action {
  readonly type = UPDATE_RING_AND_PLAYER;

  constructor() {}
}

export type Actions = player.Actions
  | ring.Actions
  | UpdateRingAndPlayer;
