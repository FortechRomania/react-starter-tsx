import { UserState, initialUserState } from "./user/UserState";

export interface State {
    user: UserState
}

export const initialState: State = {
    user: initialUserState
}