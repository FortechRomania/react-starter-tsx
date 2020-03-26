import React, {
  createContext,
  useReducer,
  useContext,
  FunctionComponent,
  ReactChildren,
  ReducerWithoutAction,
  Dispatch
} from "react";
import { initialState, AppState } from "../initialState";
import { UserActions } from "../user/UserActions";
import { Reducer } from "./Reducer";

const initialContext: {
  state: AppState;
  dispatch: Dispatch<UserActions>;
} = {
  state: initialState,
  dispatch: () => initialState
};

const StateContext = createContext(initialContext);

export const Provider: FunctionComponent<{
  initialState: AppState;
  reducer: Reducer<AppState, UserActions>;
  children: ReactChildren;
}> = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
