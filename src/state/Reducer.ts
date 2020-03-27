import { UserReducer } from "./user/UserReducer";
import { State } from "./State";

export const combineReducers = <T>(reducers: {[P in keyof T]: any}) =>  {
  const reducerEntries = Object.entries<any>(reducers) as [keyof T, any][];
    return (state: T, action: any) => {
      const nextState = {} as T;
          for(const [key, reducer] of reducerEntries){
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey;
          }
      return nextState;
    }
  }

  export const reducer = combineReducers<State>({
      user: UserReducer,
  })