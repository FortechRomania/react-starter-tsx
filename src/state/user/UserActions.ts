import { Action } from "../types/Action";

export enum UserActionTypes {
  UpdateName = "[User] Update name",
  UpdateAge = "[User] Update Age"
}

export class UpdateNameAction implements Action {
  readonly type = UserActionTypes.UpdateName;
  constructor(public name: string) {}
}
export class UpdateAgeAction implements Action {
  readonly type = UserActionTypes.UpdateName;
  constructor(public age: number) {}
}

export type UserActions = UpdateNameAction | UpdateAgeAction;

console.log(UpdateNameAction);
