import {UserCommand} from "../../../command";
import {UserActionWithGroupType} from "../../../../../actions/actions-with-group-type";
import {DefaultUserCommand} from "../../../user/default-user-command";

export class ComplexUserModificationCommandFactory {

  static getCommand (action: UserActionWithGroupType) : UserCommand {
    switch (action.type) {
      default:
        return new DefaultUserCommand();
    }
  }
}
