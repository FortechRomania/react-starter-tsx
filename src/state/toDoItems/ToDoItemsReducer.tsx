import { UserActionTypes, UserActions } from "./ToDoItemsActions";
import { ToDoItemsState } from "./ToDoItemsState";

export const ToDoItemsReducer = (
  state: ToDoItemsState,
  action: UserActions
) => {
  switch (action.type) {
    case UserActionTypes.UpdateUserAge:
      return {
        ...state,
        age: action.age
      };
    case UserActionTypes.UpdateUserName:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
