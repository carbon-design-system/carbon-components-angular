import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";

/**
 * A toggle for the side navigation
 */
@Component({
	selector: "cds-hamburger, ibm-hamburger",
	template: `
		<button
			type="button"
			(click)="doClick()"
			[ngClass]="{'cds--header__action--active': active}"
			class="cds--header__menu-trigger cds--header__action cds--header__menu-toggle"
			[attr.aria-label]="active
				? (i18n.get('UI_SHELL.HEADER.CLOSE_MENU') | async)
				: (i18n.get('UI_SHELL.HEADER.OPEN_MENU') | async)"
			[attr.title]="active
				? (i18n.get('UI_SHELL.HEADER.CLOSE_MENU') | async)
				: (i18n.get('UI_SHELL.HEADER.OPEN_MENU') | async)">
			<svg *ngIf="!active" cdsIcon="menu" size="20"></svg>
			<svg *ngIf="active" cdsIcon="close" size="20"></svg>
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
