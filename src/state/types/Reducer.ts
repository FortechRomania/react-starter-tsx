import { Action } from "./Action";
export type Reducer<T, V extends Action = Action> = (
  initialState: T,
  action: V
) => T;
