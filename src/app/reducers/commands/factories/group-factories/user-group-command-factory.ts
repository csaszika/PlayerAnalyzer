import {UserCommand} from "../../command";
import {DefaultUserCommand} from "../../user/default-user-command";
import {UserActionWithGroupType} from "../../../../actions/actions-with-group-type";
import {UserActionGroupTypes} from "../../../../actions/user/user-action-group-types";
import {UserListModificationCommandFactory} from "../type-factories/user/user-list-modification-command-factory";
import {SelectedUserModificationCommandFactory} from "../type-factories/user/selected-user-modification-command-factory";
import {EditedUserListModificationCommandFactory} from "../type-factories/user/edited-user-list-modification-command-factory";
import {ComplexUserModificationCommandFactory} from "../type-factories/user/complex-user-modification-command-factory";

export class UserGroupCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.groupType) {
      case UserActionGroupTypes.UserListModification:
        return UserListModificationCommandFactory.getCommand(action);
      case UserActionGroupTypes.SelectedUserModification:
        return SelectedUserModificationCommandFactory.getCommand(action);
      case UserActionGroupTypes.EditedUserModification:
        return EditedUserListModificationCommandFactory.getCommand(action);
      case UserActionGroupTypes.ComplexUserModification:
        return ComplexUserModificationCommandFactory.getCommand(action);
      default:
        return new DefaultUserCommand();
    }
  }
}
