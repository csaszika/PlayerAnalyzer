import {State} from "../ring";

export interface Command {
  execute(state: State, payload: any): any;
}
