import {RingActionWithGroupType} from "../../../../actions/actions-with-group-type";
import {RingCommand} from "../../command";
import {RingActionGroupTypes} from "../../../../actions/ring/ring-action-group-types";
import {RingListModificationCommandFactory} from "../type-factories/ring/ring-list-modification-command-factory";
import {DefaultRingCommand} from "../../ring/default-ring-command";

export class RingGroupCommandFactory {

  static getCommand (action: RingActionWithGroupType) : RingCommand {
    switch (action.groupType) {
        case RingActionGroupTypes.RingListModification:
          return RingListModificationCommandFactory.getCommand(action);
        default:
          return new DefaultRingCommand();
      }
  }
}
