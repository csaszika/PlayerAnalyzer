import {UserCommand} from "../command";
import {State} from "../../user";
import {User} from "../../../types/user";

export class UserSelectedCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.selected = payload as User;
    return state;
  }
}
