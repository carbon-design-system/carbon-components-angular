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
		<span class="bx--tag__label" [title]="title">
			<ng-content></ng-content>
		</span>
		<button
			class="bx--tag__close-icon"
			(click)="close.emit()"
			[disabled]="disabled"
			[title]="closeButtonLabel">
			<span class="bx--visually-hidden">{{closeButtonLabel}}</span>
			<svg ibmIconClose size="16"></svg>
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

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--filter bx--tag--${this.type} ${this.class}`;
	}

	@HostBinding("attr.aria-label") get attrAriaLabel() {
		return `${this.title || ""} ${this.closeButtonLabel}`.trim();
	}
}
