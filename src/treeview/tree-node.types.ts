import { TemplateRef } from "@angular/core";

export interface Node {
	label: string | TemplateRef<any>;
	labelContext?: any;
	value?: any;
	id?: string;
	active?: boolean;
	disabled?: boolean;
	expanded?: boolean;
	selected?: boolean;
	icon?: string | TemplateRef<any>;
	iconContext?: any;
	gap?: number;
	children?: Node[];
	[key: string]: any;
}

export interface EventOnNode {
	node: Node;
	event: Event;
}
