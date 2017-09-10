export interface User {
  id: UserId;
  userName: string;
  sso: string;
  age: number;
}

export type UserId = number;
