import {User, UserId} from "../../types/user";
import {ADD_USER, DELETE_USER, GET_USERS, USER_SELECTED, USERS_LOADED} from "./user-action-types";
import {UserActionWithGroupType} from "../actions-with-group-type";
import {State} from "../../reducers/user";

export class GetUsers implements UserActionWithGroupType {
  readonly type = GET_USERS;

  constructor(public payload: any = null) {}

  execute(state: State, action: Actions): State {
    return state;
  }
}

export class UsersLoaded implements UserActionWithGroupType {
  readonly type = USERS_LOADED;

  constructor(public payload: User[]) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      userList: action.payload as User[]
    }
  }
}

export class UserSelected implements UserActionWithGroupType {
  readonly type = USER_SELECTED;

  constructor(public payload: User) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      selected: action.payload
    }
  }
}

export class AddUser implements UserActionWithGroupType {
  readonly type = ADD_USER;

  constructor(public payload: User) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      userList: [...state.userList, action.payload as User]
    }
  }
}

export class DeleteUser implements UserActionWithGroupType {
  readonly type = DELETE_USER;

  constructor(public payload: UserId) {}

  execute(state: State, action: Actions): State {
    return {
      ...state,
      userList: state.userList.filter(user => user.id !== action.payload)
    }
  }
}

export type Actions = GetUsers
  | UsersLoaded
  | UserSelected
  | AddUser
  | DeleteUser;
