import {Ring, RingId} from "../types/ring";
import {createSelector} from "reselect";
import * as ring from '../actions/ring/ring';
import {RingGroupCommandFactory} from "./commands/factories/group-factories/ring-group-command-factory";

export interface State {
  ringList: Ring[];
  selectedId: RingId | null; // | null???
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) : State {

  let command = RingGroupCommandFactory.getCommand(action);
  return command.execute(state, action.payload);
}
