import './InProgressList.scss';

import { ListItemButtonType, ListItemType } from '../../common.types';
import React, { FunctionComponent } from 'react';

import { List } from '../../shared/List/List';

type Props = {
	onDelete: Function;
	onMoveItemToDone: Function;
	inProgressItems: ListItemType[];
};

export const InProgressList: FunctionComponent<Props> = ({ onDelete, onMoveItemToDone, inProgressItems }: Props) => {
	const buttons: ListItemButtonType[] = [
		{ label: 'Done', class: 'green-button', action: onMoveItemToDone },
		{ label: 'Delete', class: 'red-button', action: onDelete },
	];
	const items: ListItemType[] = inProgressItems.map((item) => {
		item.buttons = buttons;
		return item;
	});

	return <List items={items} />;
};
