export interface ListItem {
	content: string;
	disabled: boolean;
	selected: boolean;
	items?: ListItem[];
}