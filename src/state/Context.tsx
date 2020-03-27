import React, { createContext } from 'react';
import { UserActions } from './user/UserActions';
import { State, initialState } from './State';



const initialContext: { state: State; dispatch: React.Dispatch<UserActions> } = {
  state: initialState,
  dispatch: () => {}
};

export const Context = createContext(initialContext);