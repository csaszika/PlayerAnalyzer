import {Action} from "@ngrx/store";
import {UserCommand} from "../command";
import {DefaultUserCommand} from "../user/default-user-command";
import {UPDATE_EDITED_USER, USER_SELECTED, USERS_LOADED} from "../../../actions/user";
import {UsersLoadedCommand} from "../user/users-loaded-command";
import {UserSelectedCommand} from "../user/user-selected-command";
import {UpdateEditedUserCommand} from "../user/update-edited-user-command";

export class UserCommandFactory {

  static getCommand (action: Action) : UserCommand {
    switch (action.type) {
      case USERS_LOADED:
        return new UsersLoadedCommand();
      case USER_SELECTED:
        return new UserSelectedCommand();
      case UPDATE_EDITED_USER:
        return new UpdateEditedUserCommand();
      default:
        return new DefaultUserCommand();
    }
  }
}
