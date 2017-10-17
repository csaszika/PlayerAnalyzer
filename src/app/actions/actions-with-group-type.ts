import {Action} from "@ngrx/store";
import * as player from "../reducers/player";
import * as ring from "../reducers/ring";
import * as playerActions from "./player/player";
import * as ringActions from "./ring/ring";

/**
 * These interfaces just override @ngrx/store/Action interface.
 * The groupType field supports the separation in group factories.
 */
export interface PlayerActionWithGroupType extends Action{
  execute(state: player.State, action: playerActions.Actions): player.State;
}

export interface RingActionWithGroupType extends Action{
  execute(state: ring.State, action: ringActions.Actions): ring.State;
}

