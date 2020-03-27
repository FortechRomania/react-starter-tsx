import { UserActionTypes, UserActions } from "./UserActions";
import { UserState } from "./UserState";

export const UserReducer = (state: UserState, action: UserActions) => {
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
  