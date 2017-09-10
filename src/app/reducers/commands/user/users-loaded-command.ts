import {UserCommand} from "../command";
import {State} from "../../user";
import {User} from "../../../types/user";

export class UsersLoadedCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.userList = payload as User[];
    return state;
  }
}
