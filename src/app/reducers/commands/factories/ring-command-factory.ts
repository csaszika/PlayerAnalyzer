import {Action} from "@ngrx/store";
import {RINGS_LOADED} from "../../../actions/ring";
import {RingCommand} from "../command";
import {RingsLoadedCommand} from "../ring/rings-loaded-command";
import {DefaultRingCommand} from "../ring/default-ring-command";

export class RingCommandFactory {

  static getCommand (action: Action) : RingCommand {
    switch (action.type) {
        case RINGS_LOADED:
          return new RingsLoadedCommand();
        default:
          return new DefaultRingCommand();
      }
  }
}
