import {
	Component,
	Input,
	Output,
	ViewChild,
	ContentChild,
	ContentChildren,
	TemplateRef,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "cdl-column",
	template: ""
})
export class Column {
	public static sort = {
		ascending: Symbol(),
		descending: Symbol()
	};
	@Input() key;
	// @Input() title;
	// @Input() filter;
	@Input() width;
	@Input() resizeable = true;
	@Output() sort = new EventEmitter<Object>();
	@ContentChild("cellTemplate") template;
	@ContentChild("headerTemplate") headerTemplate;
	@ContentChild("filterTemplate") filterTemplate;
	public direction = Column.sort.descending;
	public sorted = false;
	public position: number = -1;
}
