import React, { createContext } from 'react';
import { State, initialState } from './State';

import { Action } from './Action';

const initialContext: { state: State; dispatch: React.Dispatch<Action> } = {
	state: initialState,
	/* eslint-disable @typescript-eslint/no-empty-function */
	dispatch: () => {},
};

export const Context = createContext(initialContext);
