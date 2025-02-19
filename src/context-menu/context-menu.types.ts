export interface ItemClickEvent {
	type: null | "checkbox" | "radio";
	label: string;
	info: string;
	value: string;
	event: MouseEvent & KeyboardEvent;
}
