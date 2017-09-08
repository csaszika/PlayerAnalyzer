import {Command} from "./command";
import {State} from "../ring";
import {Ring} from "../../types/ring";

export class RingsLoadedCommand implements Command {

  execute(state: State, payload: any): State {

    // let {ringList, selectedId} = state;
    //
    // ringList = payload as Ring[];
    //
    // return {ringList, selectedId};

    state = Object.assign({}, state);
    state.ringList = payload as Ring[];
    return state;
  }
}
