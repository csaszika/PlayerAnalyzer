import {Command} from "./command";
import {State} from "../ring";

export class DefaultRingCommand implements Command {

  execute(state: State, payload: any): any {
    return state;
  }
}
