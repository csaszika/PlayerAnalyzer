import {ADD_USER, DELETE_USER, USERS_LOADED} from "../../../../../actions/user/user-action-types";
import {UsersLoadedCommand} from "../../../user/users-loaded-command";
import {UserCommand} from "../../../command";
import {UserActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {AddUserCommand} from "../../../user/add-user-command";
import {DefaultUserCommand} from "../../../user/default-user-command";
import {DeleteUserCommand} from "../../../user/delete-user-command";

/**
 * Second level to find command class.
 * We find here the concrete command classes which has execute method.
 * The State changer logic is found in execute method.
 */
export class UserListModificationCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.type) {
      case USERS_LOADED:
        return new UsersLoadedCommand();
      case ADD_USER:
        return new AddUserCommand();
      case DELETE_USER:
        return new DeleteUserCommand();
      default:
        return new DefaultUserCommand();
    }
  }
}
