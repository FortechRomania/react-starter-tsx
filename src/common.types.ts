export type ListItemType = {
	title: string;
	buttons?: ListItemButtonType[];
	id: number;
};

export type ListItemButtonType = {
	label: string;
	class: string;
	action: Function;
};
