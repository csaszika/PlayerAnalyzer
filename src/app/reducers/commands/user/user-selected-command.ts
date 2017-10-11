import {UserCommand} from "../command";
import {State} from "../../user";
import {User} from "../../../types/user";

export class UserSelectedCommand implements UserCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.selected = payload as User;

    //modify childState, but I think it is not the best way
    state.childState.childList = [{id: 1, childName: 'sanyi'}, {id: 2, childName: 'sanyi2'}];

    return state;
  }
}
