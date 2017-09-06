import {Ring, RingId} from "../types/ring";
import {RINGS_LOADED} from "../actions/ring";
import {createSelector} from "reselect";
import * as ring from '../actions/ring';
import {CommandFactory} from "./commands/command-factory";

export interface State {
  ringList: Ring[];
  selectedId: RingId | null; // | null???
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) : State {

  let {ringList, selectedId} = state;
  let changed = false;

  let command = CommandFactory.getCommand(action);

  if (command) {
    let result = command.execute(state, action.payload);
    return result.changed ? result.state : state;
  }

  // switch (action.type) {
  //   case RINGS_LOADED:
  //     const rings = action.payload as Ring[];
  //     ringList = rings;
  //     changed = true;
  // }

  return state;
}

export const getRingList = (state: State) => state.ringList;
export const getSelectedRingId = (state: State) => state.selectedId;
export const getSelectedRing = createSelector(getRingList, getSelectedRingId,
  (ringList, selectedId) => ringList.find((ring) => ring.id === selectedId));
