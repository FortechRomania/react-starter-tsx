import React, { ReactElement, useReducer } from 'react';

import { Context } from './Context';
import { initialState } from './State';
import { reducer } from './Reducer';

export function Provider( { children }: any ): ReactElement {
	const [ state, dispatch ] = useReducer( reducer, initialState );
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}