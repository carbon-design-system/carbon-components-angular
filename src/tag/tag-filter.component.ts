import {
	Component,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { Tag } from "./tag.component";

@Component({
	selector: "ibm-tag-filter",
	template: `
		<ng-content></ng-content>
		<svg
			(click)="onClose($event)"
			focusable="false"
			preserveAspectRatio="xMidYMid meet"
			style="will-change: transform;"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Clear filter"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			role="img">
			<path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path>
		</svg>
	`
})
export class TagFilter extends Tag {
	/**
	 * Function for close/delete the tag
	 */
	@Output() close = new EventEmitter<any>();

	/**
	 * We need to stop the immedate propagation of click on the close button
	 * to prevent undesired effects when used within dialogs.
	 *
	 * We need to emit a click event on close to allow for clicks to be listened
	 * to on the immediate close button element.
	 */
	@Output() click = new EventEmitter<any>();

	onClose(event) {
		event.stopImmediatePropagation();
		this.click.emit();
		this.close.emit();
	}

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--filter bx--tag--${this.type} ${this.class}`;
	}
}
