import {
	Component,
	Output,
	EventEmitter,
} from "@angular/core";


/**
 * Implements a lightweight abstract dialog that can be positioned anywhere on the page
 * could be used to implement a popover or tooltip
 */
@Component({
	selector: "n-abstract-dialog",
	template: `
		`,
	host: {
	},
})
export class Dialog {
	@Output() close: EventEmitter<any> = new EventEmitter();

	public onClose() {
		this.close.emit();
	}
}
