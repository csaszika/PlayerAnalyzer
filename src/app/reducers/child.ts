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

  // let command = ChildGroupCommandFactory.getCommand(action);
  // return command.execute(state, action.payload);

  let {childList, selectedChild} = state;
  let changed = false;

  switch (action.type) {
    case CHILDREN_LOADED:
      childList = action.payload as Child[];
      changed = true;
  }

  return changed ?{
    childList: childList,
    selectedChild: selectedChild
  } : state;
}

//it should be imported in index.ts
//1 option use only root store -> good
//2 option use separated stores -> bad
export const GetChildList = (state: State) => state.childList;
