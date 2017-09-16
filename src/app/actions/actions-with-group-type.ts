import {Action} from "@ngrx/store";
import {UserActionGroupTypes} from "./user/user-action-group-types";
import {PlayerActionGroupTypes} from "./player/player-action-group-types";
import {RingActionGroupTypes} from "./ring/ring-action-group-types";
import {MoreStateActionGroupTypes} from "./more-state-action-group-types";

/**
 * These interfaces just override @ngrx/store/Action interface.
 * The groupType field supports the separation in group factories.
 */
export interface UserActionWithGroupType extends Action{
  groupType: UserActionGroupTypes;
}

export interface PlayerActionWithGroupType extends Action{
  groupType: PlayerActionGroupTypes;
}

export interface RingActionWithGroupType extends Action{
  groupType: RingActionGroupTypes;
}

/**
 * Modify more State with one action.
 *
 * Perhaps useless. Please avoid the using of this group type.
 * Only use it when it is very necessary!
 */
export interface MoreStateActionWithGroupType extends Action {
  groupType: MoreStateActionGroupTypes;
}

