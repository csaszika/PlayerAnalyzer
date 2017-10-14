import {Ring} from "../../types/ring";
import {RingActionWithGroupType} from "../actions-with-group-type";
import {State} from "../../reducers/ring";
import {RingTypes} from "./ring-actions-map";

export class GetRings implements RingActionWithGroupType {
  readonly type = RingTypes.GET_RINGS;

  constructor(public payload: any = null) {}

  execute(state: State, action: Actions): State {
    //implemented in effect
    return state;
  }
}

export class RingsLoaded implements RingActionWithGroupType {
  readonly type = RingTypes.RINGS_LOADED;

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
