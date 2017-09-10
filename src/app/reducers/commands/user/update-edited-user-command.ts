import {UserCommand} from "../command";
import {State} from "../../user";
import {User} from "../../../types/user";

export class UpdateEditedUserCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.edited = {...(payload as User)};
    return state;
  }
}
