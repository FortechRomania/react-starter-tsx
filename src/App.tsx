import './App.scss';

import React, { ReactElement } from 'react';

import { DoneList } from './features/DoneList/DoneList';
import { Header } from './shared/Header/Header';
import { InProgressList } from './features/InProgressList/InProgressList';
import { ListItemType } from './common.types';
import { UpdateToDoItems } from './state/toDoItems/ToDoItemsActions';
import { useGlobalState } from './state/useGlobalState';

function App(): ReactElement {
	const { state, dispatch } = useGlobalState();

	const moveItemFromArrayToAnother = (itemId: number, oldArray: ListItemType[], newArray: ListItemType[]) => {
		const item = oldArray.find((item) => item.id === itemId);
		if (!item) {
			return;
		}
		const newArrayUpdated = [...newArray];
		newArrayUpdated.push(item);
		const oldArrayUpdated = oldArray.filter((item) => item.id !== itemId);
		return [oldArrayUpdated, newArrayUpdated];
	};

	const deleteInProgressItem = (itemIndex: number): void => {
		const { inProgress, done } = state.toDoItems;
		const newArray = inProgress.filter((item) => item.id !== itemIndex);

		dispatch(
			new UpdateToDoItems({
				done: [...done],
				inProgress: newArray,
			})
		);
	};

	const moveItemToDone = (itemIndex: number): void => {
		const { inProgress, done } = state.toDoItems;
		const result = moveItemFromArrayToAnother(itemIndex, inProgress, done);
		if (result) {
			dispatch(new UpdateToDoItems({ done: result[1], inProgress: result[0] }));
		}
	};

	const removeItemFromDone = (itemIndex: number): void => {
		const { inProgress, done } = state.toDoItems;
		const result = moveItemFromArrayToAnother(itemIndex, done, inProgress);
		if (result) {
			dispatch(new UpdateToDoItems({ done: result[0], inProgress: result[1] }));
		}
	};

	return (
		<div className="App">
			Current name: <b>{state.user.name}</b>
			<br />
			Current age: <b>{state.user.age}</b>
			<div className="page-wrapper">
				<Header label="Done" />
				<div className="content">
					<InProgressList
						inProgressItems={state.toDoItems.inProgress}
						onDelete={deleteInProgressItem}
						onMoveItemToDone={moveItemToDone}
					/>
					<DoneList doneItems={state.toDoItems.done} onRemove={removeItemFromDone} />
				</div>
			</div>
		</div>
	);
}

export default App;
