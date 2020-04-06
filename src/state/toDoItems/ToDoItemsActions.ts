import { Action } from '../Action';
import { ToDoItemsState } from './ToDoItemsState';

export enum ToDoItemsActionTypes {
  UpdateToDoItems = '[ToDoItems] Update items'
}

export class UpdateToDoItems implements Action {
  public readonly type = ToDoItemsActionTypes.UpdateToDoItems;
  constructor( public items: ToDoItemsState ) {}
}

export type ToDoItemsActions = UpdateToDoItems;
