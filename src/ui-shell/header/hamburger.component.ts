import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "../../i18n/i18n.module";

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

			<svg *ngIf="!active" aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<path d="M4 6h24v2H4zm0 18h24v2H4zm0-9h24v2H4z" />
			</svg>

			<svg *ngIf="active" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z" />
			</svg>
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
