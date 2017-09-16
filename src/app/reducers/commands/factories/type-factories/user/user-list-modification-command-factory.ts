import {ADD_USER, DELETE_USER, USERS_LOADED} from "../../../../../actions/user/user-action-types";
import {UsersLoadedCommand} from "../../../user/users-loaded-command";
import {UserCommand} from "../../../command";
import {UserActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {AddUserCommand} from "../../../user/add-user-command";
import {DefaultUserCommand} from "../../../user/default-user-command";
import {DeleteUserCommand} from "../../../user/delete-user-command";

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
