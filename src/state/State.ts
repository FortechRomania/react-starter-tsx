import { ToDoItemsState, initialToDoItemsState } from './toDoItems/ToDoItemsState';
import { UserState, initialUserState } from './user/UserState';

export interface State {
	user: UserState;
	toDoItems: ToDoItemsState;
}

export const initialState: State = {
	user: initialUserState,
	toDoItems: initialToDoItemsState,
};
