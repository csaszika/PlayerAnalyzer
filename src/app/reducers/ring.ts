import {Ring, RingId} from "../types/ring";
import * as ring from '../actions/ring/ring';
import {RingActionsMap} from "../actions/ring/ring-actions-map";

export interface State {
  ringList: Ring[];
  selectedId: RingId | null; // | null???
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) : State {

  //The commented rows don't work. FUCK -y perhaps interesting
  // Experience: getRingList selector's ring state is undefined
  //
  // if (action.type.indexOf("@ngrx/store/init") > -1) {
  //   return state;
  // }
  // return action.execute(state, action);

  if (RingActionsMap.has(action.type)) {
    return action.execute(state, action)
  }
  return state;

  // switch (action.type) {
  //   case RINGS_LOADED:
  //   // case GET_RINGS:
  //     return action.execute(state, action);
  //   default:
  //     return state;
  // }
}
