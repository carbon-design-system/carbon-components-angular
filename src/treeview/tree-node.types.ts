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
	children?: Node[];
	[key: string]: any;
}
