import {
	Component,
	Output,
	EventEmitter,
	Input
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { NgClass } from "@angular/common";
import { IconDirective } from "carbon-components-angular/icon";

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
			[attr.aria-label]="active ? activeTitle : inactiveTitle"
			[attr.title]="active ? activeTitle : inactiveTitle">
			@if (active) {
				<svg cdsIcon="close" size="20"></svg>
			} @else {
				<svg cdsIcon="menu" size="20"></svg>
			}
		</button>
	`,
	standalone: true,
	imports: [NgClass, IconDirective]
})
export class Hamburger {
	/**
	 * Controls the active/selected state for the `Hamburger` menu.
	 */
	@Input() active = false;

	/**
	 * Set the title text when the hamburger is active
	 */
	@Input() activeTitle = this.i18n.get().UI_SHELL.HEADER.CLOSE_MENU;

	/**
	 * Set the title text when the hamburger is inactive
	 */
	@Input() inactiveTitle = this.i18n.get().UI_SHELL.HEADER.OPEN_MENU;

	/**
	 * `EventEmitter` to notify parent components of menu click events.
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

	constructor(public i18n: I18n) {}

	/**
	 * Emit the Hamburger click event upwards.
	 */
	public doClick() {
		this.selected.emit(this.active);
	}
}
