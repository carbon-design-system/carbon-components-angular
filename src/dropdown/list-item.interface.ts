export interface ListItem {
	content: string;
	selected: boolean;
	disabled?: boolean;
	items?: ListItem[];
}
