import './ListItem.scss';

import React, { FunctionComponent, ReactElement } from 'react';

import { ListItemType } from '../../common.types';

type Props = {
    item: ListItemType;
};

export const ListItem: FunctionComponent<Props> = ( { item }: Props )=>{
	function getButtons(): ReactElement[] | undefined {
		if ( !item.buttons ) {
			return;
		}
		return item.buttons.map( button => {
			return (
				<button key={button.label} className={`button ${ button.class }`}
					onClick={() => button.action( item.id )}>
					{button.label}
				</button>
			);
		} );
	}

	return (
		<div className="wrapper">
			<div className="left">
				<span>{item.title} </span>
			</div>
			<div className="right">{getButtons()}</div>
		</div>
	);
};
