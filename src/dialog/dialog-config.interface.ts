import { ElementRef, TemplateRef } from "@angular/core";

export interface DialogConfig {
	title: string;
	content: string | TemplateRef<any>;
	trigger: "click" | "hover" | "mouseenter";
	placement:
		"top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right" | "left-bottom" | "right-bottom";
	gap: number;
	parentRef: ElementRef;
	appendToBody: boolean;
	type: "warning" | "danger" | "";
	autoPosition: boolean;
	[propName: string]: any;
}
