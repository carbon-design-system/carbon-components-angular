import {
	Component,
	Output,
	EventEmitter,
	HostBinding,
	Input,
	ChangeDetectionStrategy
} from "@angular/core";
import { Tag } from "./tag.component";
import { IconDirective } from "carbon-components-angular/icon";

@Component({
	selector: "cds-tag-filter, ibm-tag-filter",
	template: `
		@if (!skeleton) {
			<ng-content select="[cdsTagIcon],[ibmTagIcon]" />
			<span
				class="cds--tag__label"
				[attr.title]="title ? title : null"
				(click)="onClick($event)">
				<ng-content />
			</span>
			<button
				class="cds--tag__close-icon"
				(click)="onClose($event)"
				[disabled]="disabled"
				[title]="closeButtonLabel">
				<span class="cds--visually-hidden">{{closeButtonLabel}}</span>
				<svg cdsIcon="close" size="16"></svg>
			</button>
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [IconDirective]
})
export class TagFilter extends Tag {
	@Input() closeButtonLabel = "Clear Filter";
	@Input() disabled = false;
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
	// eslint-disable-next-line @angular-eslint/no-output-native
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

	/**
	 * @todo
	 * Remove `cds--tag--${this.size}` in v7
	 */
	@HostBinding("attr.class") get attrClass() {
		const disabledClass = this.disabled ? "cds--tag--disabled" : "";
		const sizeClass = `cds--tag--${this.size} cds--layout--size-${this.size}`;
		const skeletonClass = this.skeleton ? "cds--skeleton" : "";

		return `cds--tag cds--tag--filter cds--tag--${this.type} ${disabledClass} ${sizeClass} ${skeletonClass} ${this.class}`;
	}

	@HostBinding("attr.aria-label") get attrAriaLabel() {
		return `${this.title || ""} ${this.closeButtonLabel}`.trim();
	}
}
