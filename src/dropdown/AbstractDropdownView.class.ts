import { Input, Output, EventEmitter } from "@angular/core";

export class AbstractDropdownView {
	@Input() items: Array<Object>;
	@Output() select: EventEmitter<Object>;
	getNextItem(): Object { return; }
	getNextElement(): HTMLElement { return; }
	getPrevItem(): Object { return; }
	getPrevElement(): HTMLElement { return; }
}
