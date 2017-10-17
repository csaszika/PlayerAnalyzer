import {User} from "../types/user";
import * as user from '../actions/user/user';
import {ADD_USER, DELETE_USER, USER_SELECTED, USERS_LOADED} from "../actions/user/user-action-types";

export interface State {
  userList: User[];
  selected: User;
}

export const initialState: State = {
  userList: [],
  selected: null,
};

/**
 * This is the new version of Action handling.
 * There 2 steps to get command class. First switch case is based on
 * action filtering by groupType and the second is based on action filtering by type.
 *
 * Advantages of this design:
 * 1. Hardly readable switch case in reducer is no more.
 * 2. State manipulation is separated into classes with the same structure.
 * 3. Easy to test.
 * 4. Easy to maintain.
 * 5. Easy to extend.
 */
export function reducer (state = initialState, action: user.Actions) : State {

  switch (action.type) {
    case USERS_LOADED:
    case USER_SELECTED:
    case ADD_USER:
    case DELETE_USER:
      return action.execute(state, action);
    default:
      return state;
  }
}
