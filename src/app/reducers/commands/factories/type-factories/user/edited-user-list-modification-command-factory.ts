import {UPDATE_EDITED_USER} from "../../../../../actions/user/user-action-types";
import {UserCommand} from "../../../command";
import {UserActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {DefaultUserCommand} from "../../../user/default-user-command";
import {UpdateEditedUserCommand} from "../../../user/update-edited-user-command";

export class EditedUserListModificationCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.type) {
      case UPDATE_EDITED_USER:
        return new UpdateEditedUserCommand();
      default:
        return new DefaultUserCommand();
    }
  }
}
