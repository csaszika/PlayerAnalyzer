import {RingCommand} from "../command";
import {State} from "../../ring";

export class DefaultRingCommand implements RingCommand {

  execute(state: State, payload: any): any {
    return state;
  }
}
