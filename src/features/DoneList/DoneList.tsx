import { ListItemButtonType, ListItemType } from '../../common.types';
import React, { FunctionComponent } from 'react';

import { List } from '../../shared/List/List';

type PropTypes = { doneItems: ListItemType[]; onRemove: Function };

export const DoneList: FunctionComponent<PropTypes> = ( { doneItems, onRemove }: PropTypes ) => {
	const buttons: ListItemButtonType[] = [
		{ label: 'Remove', class: 'red-button', action: onRemove }
	];
	const DoneItems: ListItemType[] = doneItems.map( item => {
		item.buttons = buttons;
		return item;
	} );

	return <List items={ DoneItems } />;
};
