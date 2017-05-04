import { Input, Output, EventEmitter } from "@angular/core";
import { ListItem } from "./list-item.interface";

export class AbstractDropdownView {
	@Input() items: Array<ListItem>;
	@Output() select: EventEmitter<Object>;
	getNextItem(): ListItem { return; }
	getNextElement(): HTMLElement { return; }
	getPrevItem(): ListItem { return; }
	getPrevElement(): HTMLElement { return; }
	getSelected(): ListItem[] { return; }
	propagateSelected(value: Array<ListItem>): void {}
}
