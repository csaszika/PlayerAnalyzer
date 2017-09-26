import {UserCommand} from "../../command";
import {DefaultUserCommand} from "../../user/default-user-command";
import {UserActionWithGroupType} from "../../../../actions/actions-with-group-type";
import {UserActionGroupTypes} from "../../../../actions/user/user-action-group-types";
import {UserListModificationCommandFactory} from "../type-factories/user/user-list-modification-command-factory";
import {SelectedUserModificationCommandFactory} from "../type-factories/user/selected-user-modification-command-factory";
import {ComplexUserModificationCommandFactory} from "../type-factories/user/complex-user-modification-command-factory";

/**
 * First level to find command class.
 * Filtering by groupType which is an enum.
 */
export class UserGroupCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.groupType) {
      case UserActionGroupTypes.UserListModification:
        return UserListModificationCommandFactory.getCommand(action);
      case UserActionGroupTypes.SelectedUserModification:
        return SelectedUserModificationCommandFactory.getCommand(action);
      case UserActionGroupTypes.ComplexUserModification:
        return ComplexUserModificationCommandFactory.getCommand(action);
      default:
        return new DefaultUserCommand();
    }
  }
}
