import {
	Component,
	Output,
	EventEmitter,
	HostBinding,
	Input
} from "@angular/core";
import { Tag } from "./tag.component";

@Component({
	selector: "ibm-tag-filter",
	template: `
		<span
			class="bx--tag__label"
			[attr.title]="title ? title : null"
			(click)="onClick($event)">
			<ng-content></ng-content>
		</span>
		<button
			class="bx--tag__close-icon"
			(click)="onClose($event)"
			[disabled]="disabled"
			[title]="closeButtonLabel">
			<span class="bx--visually-hidden">{{closeButtonLabel}}</span>
			<svg ibmIcon="close" size="16"></svg>
		</button>
	`
})
export class TagFilter extends Tag {
	@Input() closeButtonLabel = "Clear Filter";
	@Input() disabled: boolean;
	@Input() title: string;

	/**
	 * Function for close/delete the tag
	 */
	@Output() close = new EventEmitter<any>();

	/**
	 * We need to stop the immedate propagation of click on the close button
	 * to prevent undesired effects when used within dialogs.
	 *
	 * We need to emit a click event on close to allow for clicks to be listened
	 * to on the immediate close button element. `action` distinguishes between clicks on
	 * the tag vs. clicks on the close button.
	 */
	@Output() click = new EventEmitter<{ action: "click" | "close" }>();

	onClick(event: any) {
		event.stopImmediatePropagation();
		if (!this.disabled) {
			this.click.emit({ action: "click" });
		}
	}

	onClose(event: any) {
		event.stopImmediatePropagation();
		this.click.emit({ action: "close" });
		this.close.emit();
	}

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--filter bx--tag--${this.type} ${this.class}${this.disabled ? " bx--tag--disabled" : ""}`;
	}

	@HostBinding("attr.aria-label") get attrAriaLabel() {
		return `${this.title || ""} ${this.closeButtonLabel}`.trim();
	}
}
