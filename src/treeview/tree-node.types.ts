import { TemplateRef } from "@angular/core";

export interface Node {
	label: string | TemplateRef<any>;
	labelContext?: any;
	value?: any;
	id?: string;
	active?: boolean;
	disabled?: boolean;
	// selectable is only valid for nodes with childre. If true, the node won't become selected and if clicked it would only expand/compress itself
	selectable?: boolean;
	expanded?: boolean;
	selected?: boolean;
	icon?: string | TemplateRef<any>;
	iconContext?: any;
	children?: Node[];
	[key: string]: any;
}
