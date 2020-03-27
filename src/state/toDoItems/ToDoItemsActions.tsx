export enum UserActionTypes {
  UpdateUserName = "[User] Update User name",
  UpdateUserAge = "[User] Update User age"
}

interface UpdateUserName {
  type: UserActionTypes.UpdateUserName;
  name: string;
}

interface UpdateUserAge {
  type: UserActionTypes.UpdateUserAge;
  age: number;
}

export type UserActions = UpdateUserName | UpdateUserAge;
