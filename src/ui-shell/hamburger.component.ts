import { Component } from "@angular/core";
import { I18n } from "../i18n/i18n.module";

/**
 * A slide-out hamburger menu
 *
 * TODO: This is a stub component, and needs to be implemented.
 */
@Component({
	selector: "ibm-hamburger",
	template: `
		<button
			class="bx--header__menu-trigger bx--header__action"
			[attr.aria-label]="i18n.get('UI_SHELL.HEADER.MENU') | async"
			[attr.title]="i18n.get('UI_SHELL.HEADER.MENU') | async">
			<svg aria-hidden="true" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<path d="M4 6h24v2H4zm0 18h24v2H4zm0-9h24v2H4z" />
			</svg>
		</button>
	`
})
export class Hamburger {
	constructor(public i18n: I18n) { }
}
