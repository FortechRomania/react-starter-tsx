import { Action } from "../Action";

export enum UserActionTypes {
    UpdateUserName = "[User] Update User name",
    UpdateUserAge = "[User] Update User age"

}

export class UpdateUserAge implements Action{
    public readonly type =  UserActionTypes.UpdateUserAge;
    constructor(public age: number) { }
}

export class UpdateUserName implements Action{
    public readonly type =  UserActionTypes.UpdateUserName;
    constructor(public name: string) { }
}


export type UserActions = UpdateUserName | UpdateUserAge;