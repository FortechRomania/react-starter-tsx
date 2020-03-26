import { Reducer } from "../types/Reducer";
import { userInitialState, UserState } from "./UserState";
import { UserActions, UserActionTypes } from "./UserActions";

export const userReducer: Reducer<UserState, UserActions> = (
  state: UserState = userInitialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.UpdateName:
      return {
        ...state,
        name: action.type 
      };
    default:
      return state;
  }
};
