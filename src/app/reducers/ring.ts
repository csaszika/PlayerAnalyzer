import {Ring, RingId} from "../types/ring";
import * as ring from '../actions/ring/ring';
import {GET_RINGS, RINGS_LOADED} from "../actions/ring/ring-action-types";

export interface State {
  ringList: Ring[];
  selectedId: RingId | null; // | null???
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) : State {

  //The commented rows don't work. FUCK
  // Experience: getRingList selector's ring state is undefined
  //
  // if (action.type.indexOf("@ngrx/store/init") > -1) {
  //   return state;
  // }
  // return action.execute(state, action);

  switch (action.type) {
    case RINGS_LOADED:
    case GET_RINGS:
      return action.execute(state, action);
    default:
      return state;
  }
}
