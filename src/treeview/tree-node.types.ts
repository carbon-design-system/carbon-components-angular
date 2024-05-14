import { TemplateRef } from "@angular/core";

export interface Node {
	label: string | TemplateRef<any>;
	value?: any;
	id?: string;
	active?: boolean;
	disabled?: boolean;
	expanded?: boolean;
	selected?: boolean;
	icon?: string | TemplateRef<any>;
	children?: Node[];
	[key: string]: any;
}
