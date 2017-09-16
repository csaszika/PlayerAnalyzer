import {UserCommand} from "../command";
import {State} from "../../user";
import {User} from "../../../types/user";

export class AddUserCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.userList = [...state.userList, payload as User];
    return state;
  }
}
