import {Ring} from "../../types/ring";
import {GET_RINGS, RINGS_LOADED} from "./ring-action-types";
import {RingActionWithGroupType} from "../actions-with-group-type";
import {State} from "../../reducers/ring";

export class GetRings implements RingActionWithGroupType {
  readonly type = GET_RINGS;

  constructor(public payload: any = null) {}

  execute(state: State, action: Actions): State {
    //implemented in effect
    return state;
  }
}

export class RingsLoaded implements RingActionWithGroupType {
  readonly type = RINGS_LOADED;

  constructor(public payload: Ring[]) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      ringList: action.payload as Ring[]
    }
  }
}

export type Actions = GetRings
  | RingsLoaded;
