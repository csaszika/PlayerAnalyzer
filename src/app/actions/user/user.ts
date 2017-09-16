import {Action} from "@ngrx/store";
import {User, UserId} from "../../types/user";
import {UserActionGroupTypes} from "./user-action-group-types";
import {ADD_USER, DELETE_USER, GET_USERS, UPDATE_EDITED_USER, USER_SELECTED, USERS_LOADED} from "./user-action-types";
import {UserActionWithGroupType} from "../actions-with-group-type";

export class GetUsers implements UserActionWithGroupType {
  readonly type = GET_USERS;
  readonly groupType = UserActionGroupTypes.UserListModification;

  constructor(public payload: any = null) {}
}

export class UsersLoaded implements UserActionWithGroupType {
  readonly type = USERS_LOADED;
  readonly groupType = UserActionGroupTypes.UserListModification;

  constructor(public payload: User[]) {}
}

export class UserSelected implements UserActionWithGroupType {
  readonly type = USER_SELECTED;
  readonly groupType = UserActionGroupTypes.SelectedUserModification;

  constructor(public payload: User) {}
}

export class UpdateEditedUser implements UserActionWithGroupType {
  readonly type = UPDATE_EDITED_USER;
  readonly groupType = UserActionGroupTypes.EditedUserModification;

  constructor(public payload: User) {}
}

export class AddUser implements UserActionWithGroupType {
  readonly type = ADD_USER;
  readonly groupType = UserActionGroupTypes.UserListModification;

  constructor(public payload: UserId) {}
}

export class DeleteUser implements UserActionWithGroupType {
  readonly type = DELETE_USER;
  readonly groupType = UserActionGroupTypes.UserListModification;

  constructor(public payload: UserId) {}
}

export type Actions = GetUsers
  | UsersLoaded
  | UserSelected
  | AddUser
  | DeleteUser;
