import {Action} from "@ngrx/store";
import {RINGS_LOADED} from "../../actions/ring";
import {Command} from "./command";
import {RingsLoadedCommand} from "./rings-loaded-command";

export class CommandFactory {

  static getCommand (action: Action) : Command {
    switch (action.type) {
        case RINGS_LOADED:
          return new RingsLoadedCommand();
        default:
          return null;
      }
  }
}
