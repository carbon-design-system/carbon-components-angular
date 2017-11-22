import { Component, Input, Output, EventEmitter } from "@angular/core";


/**
 * class: Hamburger (extends PopoverDirective)
 * selector: `n-hamburger`
 *
 * ```html
 * <n-hamburger (onClick)="onClick($event)" hamburger></n-hamburger>
 * ```
 *
 * @export
 * @class Hamburger
 */
@Component({
	selector: "n-hamburger",
	template: `
	<button class="top-nav_toggler"
			[ngClass]="{'active': selected}"
			(click)="clickFn()"
			aria-label="toggle primary navigation menu"
			tabindex="0"
			type="button"
			role="button"
			title="Primary navigation menu">
		<svg class="icon--white" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="1 3 18 18">
 		<path d="M1
 		3h18v3H1zM1 9h18v3H1zM1 15h18v3H1z"/></svg>
	</button>
  `
})
export class Hamburger {
	/**
	 * Controls the active/selected state for the `Hamburger` menu.
	 * @type {boolean}
	 * @memberof Hamburger
	 */
	@Input() selected = false;
	/**
	 * `EventEmitter` to notify parent components of menu click events.
	 * @type {EventEmitter<Object>}
	 * @memberof Hamburger
	 */
	@Output() onClick: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Emit the Hamburger click event upwards.
	 * @memberof Hamburger
	 */
	public clickFn() {
		let hamburgerClick = {};
			this.onClick.emit({
				hamburgerClick
			});
	}
}
