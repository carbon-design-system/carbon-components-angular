import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "../../i18n/index";

/**
 * A toggle for the side navigation
 */
@Component({
	selector: "ibm-hamburger",
	template: `
		<button
			type="button"
			(click)="doClick()"
			[ngClass]="{'bx--header__action--active': active}"
			class="bx--header__menu-trigger bx--header__action bx--header__menu-toggle"
			[attr.aria-label]="i18n.get('UI_SHELL.HEADER.MENU') | async"
			[attr.title]="i18n.get('UI_SHELL.HEADER.MENU') | async">
			<svg *ngIf="!active" ibmIconMenu size="20"></svg>
			<svg *ngIf="active" ibmIconClose size="20"></svg>
		</button>
	`
})
export class Hamburger {
	/**
	 * Controls the active/selected state for the `Hamburger` menu.
	 */
	@Input() active = false;

	/**
	 * `EventEmitter` to notify parent components of menu click events.
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(public i18n: I18n) { }

	/**
	 * Emit the Hamburger click event upwards.
	 */
	public doClick() {
		this.selected.emit(this.active);
	}
}
