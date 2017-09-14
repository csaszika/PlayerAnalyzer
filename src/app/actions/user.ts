import {Action} from "@ngrx/store";
import {User, UserId} from "../types/user";
import {UsersLoadedCommand} from "../reducers/commands/user/users-loaded-command";

export const GET_USERS = 'GET_USERS';
export const USERS_LOADED = 'USERS_LOADED';
export const USER_SELECTED = 'USER_SELECTED';
export const UPDATE_EDITED_USER = 'UPDATE_EDITED_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor(public payload: any = null) {}
}

export class UsersLoaded implements Action {
  readonly type = USERS_LOADED;

  constructor(public payload: User[]) {}
}

export class UserSelected implements Action {
  readonly type = USER_SELECTED;

  constructor(public payload: User) {}
}

export class UpdateEditedUser implements Action {
  readonly type = UPDATE_EDITED_USER;

  constructor(public payload: User) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: UserId) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: UserId) {}
}

export type Actions = GetUsers
  | UsersLoaded
  | UserSelected
  | AddUser;
