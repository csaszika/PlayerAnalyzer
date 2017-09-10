import {User} from "../types/user";
import * as user from '../actions/user';
import {} from "./commands/factories/ring-command-factory";
import {UserCommandFactory} from "./commands/factories/user-command-factory";

export interface State {
  userList: User[];
  selected: User;
  edited: User;
}

export const initialState: State = {
  userList: [],
  selected: null,
  edited: null
};

export function reducer (state = initialState, action: user.Actions) : State {

  let command = UserCommandFactory.getCommand(action);
  return command.execute(state, action.payload);
}

export const getUserList = (state: State) => state.userList;
export const getSelectedUser = (state: State) => state.selected;
export const getEditedUser = (state: State) => state.edited;
