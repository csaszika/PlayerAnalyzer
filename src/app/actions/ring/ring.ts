import {Ring} from "../../types/ring";
import {RingActionGroupTypes} from "./ring-action-group-types";
import {GET_RINGS, RINGS_LOADED} from "./ring-action-types";
import {RingActionWithGroupType} from "../actions-with-group-type";

export class GetRings implements RingActionWithGroupType {
  readonly type = GET_RINGS;
  readonly groupType = RingActionGroupTypes.RingListModification;

  constructor(public payload: any = null) {}
}

export class RingsLoaded implements RingActionWithGroupType {
  readonly type = RINGS_LOADED;
  readonly groupType = RingActionGroupTypes.RingListModification;

  constructor(public payload: Ring[]) {}
}

export type Actions = GetRings
  | RingsLoaded;
