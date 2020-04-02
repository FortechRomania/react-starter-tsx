import { useGlobalState } from '../useGlobalState';


export const useUserState = () => {
    const {state, dispatch} = useGlobalState();

    return {state: state.user, dispatch};
}