import './Header.scss';

import React, { FunctionComponent } from 'react';

type Props = { label: string };

export const Header: FunctionComponent<Props> = ( { label }: Props ) => (
	<div className="header-bar">
		<button className="button">Go to {label}</button>
	</div>
);
