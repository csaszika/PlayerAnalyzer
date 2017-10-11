import {Child} from "../../types/child";
import {ChildActionGroupTypes} from "./child-action-group-types";
import {CHILDREN_LOADED, GET_CHILDREN} from "./child-action-types";
import {ChildActionWithGroupType} from "../actions-with-group-type";

export class GetChildren implements ChildActionWithGroupType {
  readonly type = GET_CHILDREN;
  readonly groupType = ChildActionGroupTypes.ChildListModification;

  constructor(public payload: any = null) {}
}

export class ChildrenLoaded implements ChildActionWithGroupType {
  readonly type = CHILDREN_LOADED;
  readonly groupType = ChildActionGroupTypes.ChildListModification;

  constructor(public payload: Child[]) {}
}

export type Actions = GetChildren
  | ChildrenLoaded;
