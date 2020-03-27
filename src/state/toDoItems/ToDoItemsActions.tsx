import { Action } from "../Action";

export enum ToDoItemsActionTypes {
  UpdateToDoItems = "[ToDoItems] Update items"
}

export class UpdateToDoItems implements Action {
  public readonly type = ToDoItemsActionTypes.UpdateToDoItems;
  constructor(public items: any) {}
}

export type ToDoItemsActions = UpdateToDoItems;
