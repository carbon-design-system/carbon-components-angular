import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	AfterViewInit,
	Injector,
	ElementRef,
	TemplateRef,
	HostListener,
	ViewChild
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import { cycleTabs, getFocusElementList } from "./../common/tab.service";

/**
 * Implements a lightweight abstract dialog that can be positioned anywhere on the page
 * could be used to implement a popoer or tooltip
 */
@Component({
	selector: "n-abstract-dialog",
	template: `
		`,
	host: {
	},
})
export class AbstractDialog {
	@Output() close: EventEmitter<any> = new EventEmitter();

	public onClose() {
		this.close.emit();
	}
}
