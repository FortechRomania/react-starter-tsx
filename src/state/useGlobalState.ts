import { Context } from './Context';
import { useContext } from 'react';

export const useGlobalState = () => useContext(Context);
