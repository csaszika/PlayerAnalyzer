import {USER_SELECTED} from "../../../../../actions/user/user-action-types";
import {UserCommand} from "../../../command";
import {UserActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {DefaultUserCommand} from "../../../user/default-user-command";
import {UserSelectedCommand} from "../../../user/user-selected-command";

export class SelectedUserModificationCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.type) {
      case USER_SELECTED:
        return new UserSelectedCommand();
      default:
        return new DefaultUserCommand();
    }
  }
}
