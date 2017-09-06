import {Command} from "./command";
import {Injectable} from "@angular/core";
import {State} from "../ring";
import {Ring} from "../../types/ring";

@Injectable()
export class RingsLoadedCommand implements Command {

  execute(state: State, payload: any): any {

    let {ringList, selectedId} = state;
    let changed = false;

    ringList = payload as Ring[];
    changed = true;

    return {state: {ringList: ringList, selectedId: selectedId}, changed: changed};

    // state.ringList = payload as Ring[];
    // changed = true;
    // return {state: state, changed: changed};
  }
}
