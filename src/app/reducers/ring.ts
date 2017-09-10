import {Ring, RingId} from "../types/ring";
import {createSelector} from "reselect";
import * as ring from '../actions/ring';
import {RingCommandFactory} from "./commands/factories/ring-command-factory";

export interface State {
  ringList: Ring[];
  selectedId: RingId | null; // | null???
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) : State {

  let command = RingCommandFactory.getCommand(action);
  return command.execute(state, action.payload);
}

export const getRingList = (state: State) => state.ringList;
export const getSelectedRingId = (state: State) => state.selectedId;
export const getSelectedRing = createSelector(getRingList, getSelectedRingId,
  (ringList, selectedId) => ringList.find((ring) => ring.id === selectedId));
