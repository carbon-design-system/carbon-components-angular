import { Input, Output, EventEmitter } from "@angular/core";

export class View {
	@Input() items: Array<Object>;
	@Output() select: EventEmitter<Object>;
}
