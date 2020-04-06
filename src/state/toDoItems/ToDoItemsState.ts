import { ListItemType } from '../../common.types';

export type ToDoItemsState = {
  done: ListItemType[];
  inProgress: ListItemType[];
};

export const initialToDoItemsState: ToDoItemsState = {
	done: [ { id: 1, title: 'Shopping' }, { id: 2, title: 'Cooking' } ],
	inProgress: [
		{ id: 3, title: 'Groceries' },
		{ id: 4, title: 'Cleaning' },
		{ id: 5, title: 'Creating a website' }
	]
};
