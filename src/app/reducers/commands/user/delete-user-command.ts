import {UserCommand} from "../command";
import {State} from "../../user";
import {UserId} from "../../../types/user";

export class DeleteUserCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.userList = state.userList.filter(user => user.id === payload as UserId);
    return state;
  }
}
