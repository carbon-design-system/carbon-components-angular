import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef
} from "@angular/core";
import position, { Positions, AbsolutePosition } from "../common/position.service";

/**
 * Implements a dialog that can be positioned anywhere on the page
 * could be used to implement a popover or tooltip
 */
@Component({
	selector: "n-dialog",
})
export class Dialog {
	@Output() close: EventEmitter<any> = new EventEmitter();
	@Input() dialogConfig;
	protected placement = Positions.auto;

	constructor(public _elementRef: ElementRef) {
	}

	protected addGap = (pos) => position.addOffset(pos, 0, 0);

	placeDialog(el): void {
		let parentEl = this.dialogConfig.parentRef.nativeElement;
		// let el = this.dialog.nativeElement;
		let pos = this.addGap(position.findRelative(parentEl, el, this.placement));
		if (this.dialogConfig.appendToBody) {
			pos = position.addOffset(pos, window.scrollY, window.scrollX);
		}
		position.setElement(el, pos);
		// top
		// position.setElement(el, position.addOffset(pos, -(this.dialogConfig.gap)));
		// bottom
		// position.setElement(el, position.addOffset(pos, this.dialogConfig.gap));
		// left
		// position.setElement(el, position.addOffset(pos, 0, -(this.dialogConfig.gap)));
		// right
		// position.setElement(el, position.addOffset(pos, 0, this.dialogConfig.gap));
	}

	public onClose() {
		this.close.emit();
	}
}
