import {Action} from "@ngrx/store";
import * as user from "../reducers/user";
import * as userActions from "./user/user";

export interface UserActionWithGroupType extends Action{
  execute(state: user.UserState, action: userActions.Actions): user.UserState;
}
