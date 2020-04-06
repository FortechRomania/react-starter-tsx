import './List.scss';

import React, { FunctionComponent } from 'react';

import { ListItem } from '../ListItem/ListItem';
import { ListItemType } from '../../common.types';

type Props = {
  items: ListItemType[];
};

export const List: FunctionComponent<Props> = ( { items }: Props ) => {
	return (
		<div className="list-wrapper">
			{items.length ? (
				items.map( item => < ListItem key={item.id} item={item} /> )
			) : (
				<span className= "info">No items in the list</span>
			)}
		</div>
	);
};
