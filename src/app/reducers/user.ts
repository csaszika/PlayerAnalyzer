import {User} from "../types/user";
import * as user from '../actions/user/user';
import {} from "./commands/factories/group-factories/ring-group-command-factory";
import {UserGroupCommandFactory} from "./commands/factories/group-factories/user-group-command-factory";

export interface State {
  userList: User[];
  selected: User;
}

export const initialState: State = {
  userList: [],
  selected: null
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

  let command = UserGroupCommandFactory.getCommand(action);
  return command.execute(state, action.payload);
}
