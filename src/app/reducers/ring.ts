import {Ring, RingId} from "../types/ring";
import {RINGS_LOADED} from "../actions/ring";
import {createSelector} from "reselect";
import * as ring from '../actions/ring';

export interface State {
  ringList: Ring[];
  selectedId: RingId | null;
}

export const initialState: State = {
  ringList: [],
  selectedId: null
};

export function reducer (state = initialState, action: ring.Actions) {

  let {ringList, selectedId} = state;
  let changed = false;

  switch (action.type) {
    case RINGS_LOADED:
      const rings = action.payload as Ring[];
      ringList = rings;
      changed = true;
  }

  return changed ? {
    ringList: ringList,
    selectedId: selectedId
  } : state;
}

export const getRingList = (state: State) => state.ringList;
export const getSelectedRingId = (state: State) => state.selectedId;
export const getSelectedRing = createSelector(getRingList, getSelectedRingId,
  (ringList, selectedId) => ringList.find((ring) => ring.id === selectedId));
