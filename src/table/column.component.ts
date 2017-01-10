import { Component, Input, Output, ViewChild, ContentChild, ContentChildren, TemplateRef, EventEmitter } from "@angular/core";

@Component({
	selector: "cdl-column",
	template: ""
})
export class Column {
	@Input() key;
	@Input() title;
	@Input() filter;
	@Input() width;
	@Input() resizeable = true;
	@Output() sort = new EventEmitter<Object>();
	@ContentChild(TemplateRef) template;
	public direction = "down";
	public position: number = -1;
}
