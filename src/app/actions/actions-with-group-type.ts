import {Action} from "@ngrx/store";
import * as user from "../reducers/user";
import * as player from "../reducers/player";
import * as ring from "../reducers/ring";
import * as child from "../reducers/child";
import * as userActions from "./user/user";
import * as playerActions from "./player/player";
import * as childActions from "./child/child";
import * as ringActions from "./ring/ring";

/**
 * These interfaces just override @ngrx/store/Action interface.
 * The groupType field supports the separation in group factories.
 */
export interface UserActionWithGroupType extends Action{
  execute(state: user.State, action: userActions.Actions): user.State;
}

export interface ChildActionWithGroupType extends Action{
  execute(state: child.State, action: childActions.Actions): child.State;
}

export interface PlayerActionWithGroupType extends Action{
  execute(state: player.State, action: playerActions.Actions): player.State;
}

export interface RingActionWithGroupType extends Action{
  execute(state: ring.State, action: ringActions.Actions): ring.State
}

