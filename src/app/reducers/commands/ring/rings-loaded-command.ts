import {RingCommand} from "../command";
import {State} from "../../ring";
import {Ring} from "../../../types/ring";

export class RingsLoadedCommand implements RingCommand {

  execute(state: State, payload: any): State {
    state = Object.assign({}, state);
    state.ringList = payload as Ring[];
    return state;
  }
}
