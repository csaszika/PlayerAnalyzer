import * as Ring from "../ring";
import * as User from "../user";

export interface RingCommand {
  execute(state: Ring.State, payload: any): any;
}

export interface UserCommand {
  execute(state: User.State, payload: any): any;
}


