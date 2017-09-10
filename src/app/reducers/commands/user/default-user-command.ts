import {UserCommand} from "../command";
import {State} from "../../user";

export class DefaultUserCommand implements UserCommand {

  execute(state: State, payload: any): any {
    return state;
  }
}
