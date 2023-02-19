import {
	Component,
	Input,
	Output,
	EventEmitter,
	TemplateRef
} from "@angular/core";
import { BaseIconButton } from "carbon-components-angular/button";

/**
 * Contained by `HeaderGlobal`. Generally used to trigger `Panel`s
 */
@Component({
	selector: "cds-header-action, ibm-header-action",
	template: `
		<cds-icon-button
			[buttonNgClass]="{
				'cds--header__action': true,
				'cds--header__action--active': active
			}"
			(click)="onClick()"
			[align]="align"
			[caret]="caret"
			[dropShadow]="dropShadow"
			[highContrast]="highContrast"
			[isOpen]="isOpen"
			[enterDelayMs]="enterDelayMs"
			[leaveDelayMs]="leaveDelayMs"
			[description]="description"
			[buttonAttributes]="{
				'aria-label': ariaLabel
			}">
			<ng-content></ng-content>
		</cds-icon-button>
	`
})
export class HeaderAction extends BaseIconButton {
	/**
	 * Tooltip content to show on mouseenter
	 */
	@Input() description: string | TemplateRef<any>;
	/**
	 * Sets the aria label on the nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Toggles the active state. May be used to toggle a `Panel`s active state.
	 */
	@Input() active = false;
	/**
	 * "Change" emitter to allow double binding to the `active` Input.
	 */
	@Output() activeChange = new EventEmitter<boolean>();
	/**
	 * Emits when the action has been clicked.
	 */
	@Output() selected = new EventEmitter<boolean>();

	onClick() {
		this.active = !this.active;
		this.selected.emit(this.active);
		this.activeChange.emit(this.active);
	}
}
