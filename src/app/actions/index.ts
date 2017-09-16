import * as player from './player/player';
import * as ring from './ring/ring';
import * as user from './user/user';
import {MoreStateActionGroupTypes} from "./more-state-action-group-types";
import {MoreStateActionWithGroupType} from "./actions-with-group-type";

export const UPDATE_RING_AND_PLAYER = 'UPDATE_RING_AND_PLAYER';

export class UpdateRingAndPlayer implements MoreStateActionWithGroupType {
  readonly type = UPDATE_RING_AND_PLAYER;
  readonly groupType = MoreStateActionGroupTypes.PlayerAndRingModification;

  constructor(public payload: any = null) {}
}

export type Actions = SpecificActions
  | UpdateRingAndPlayer;

type SpecificActions = player.Actions
  | ring.Actions
  | user.Actions;
