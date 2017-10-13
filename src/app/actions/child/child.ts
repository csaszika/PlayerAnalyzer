import {Child} from "../../types/child";
import {CHILDREN_LOADED, GET_CHILDREN} from "./child-action-types";
import {ChildActionWithGroupType} from "../actions-with-group-type";
import {State} from "../../reducers/child";

export class GetChildren implements ChildActionWithGroupType {
  readonly type = GET_CHILDREN;

  constructor(public payload: any = null) {}

  execute(state: State, action: Actions): State {
    //implemented in effect
    return state;
  }
}

export class ChildrenLoaded implements ChildActionWithGroupType {
  readonly type = CHILDREN_LOADED;

  constructor(public payload: Child[]) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      childList: action.payload as Child[]
    }
  }
}

export type Actions = GetChildren
  | ChildrenLoaded;
