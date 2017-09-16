import {RingActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {RingCommand} from "../../../command";
import {RINGS_LOADED} from "../../../../../actions/ring/ring-action-types";
import {RingsLoadedCommand} from "../../../ring/rings-loaded-command";
import {DefaultRingCommand} from "../../../ring/default-ring-command";

export class RingListModificationCommandFactory {

  static getCommand (action: RingActionWithGroupType) : RingCommand {
    switch (action.type) {
      case RINGS_LOADED:
        return new RingsLoadedCommand();
      // case ADD_RING:
      //   return new AddRingCommand();
      // case DELETE_RING:
      //   return new DeleteRingCommand();
      default:
        return new DefaultRingCommand();
    }
  }
}
