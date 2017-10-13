import {Child} from "../types/child";
import {Actions} from "../actions/child/child";
import {CHILDREN_LOADED} from "../actions/child/child-action-types";

export interface State {
  childList: Child[];
  selectedChild: Child;
}

export const initialState: State = {
  childList: [],
  selectedChild: null
};

export function reducer (state = initialState, action: Actions) : State {

  switch (action.type) {
    case CHILDREN_LOADED:
      return action.execute(state, action);
    default:
      return state;
  }
}

