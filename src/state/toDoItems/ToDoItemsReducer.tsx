import { ToDoItemsActionTypes, ToDoItemsActions } from "./ToDoItemsActions";
import { ToDoItemsState } from "./ToDoItemsState";

export const ToDoItemsReducer = (
  state: ToDoItemsState,
  action: ToDoItemsActions
) => {
  switch (action.type) {
    case ToDoItemsActionTypes.UpdateToDoItems:
      return {
        ...state,
        age: action.items
      };

    default:
      return state;
  }
};
