import { Component, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";

/**
 * A fixed header and navigation.
 * Header may contain a Hamburger menu to toggle the side navigation, navigation actions,
 * and global actions (generally in the form of `Panel`s).
 *
 * [See demo](../../?path=/story/ui-shell--header)
 *
 * <example-url>../../iframe.html?id=ui-shell--header</example-url>
 *
 * @export
 * @class Header
 */
@Component({
	selector: "ibm-header",
	template: `
		<header
			class="bx--header"
			role="banner"
			[attr.aria-label]="brand + ' ' + name">
			<a
				class="bx--skip-to-content"
				[href]="skipTo"
				tabindex="0">
				{{ i18n.get("UI_SHELL.SKIP_TO") | async }}
			</a>
			<ng-content select="ibm-hamburger"></ng-content>
			<a class="bx--header__name" href="#">
				<span class="bx--header__name--prefix">{{brand}}&nbsp;</span>
				{{name}}
			</a>
			<ng-content></ng-content>
		</header>
	`
})
export class Header {
	/**
	 * ID in the main body content to jump to. Used by keyboard and screen reader users to skip the header content.
	 */
	@Input() skipTo: string;
	/**
	 * Label that shows to the right of the `brand` text. Generally a product name.
	 */
	@Input() name: string;
	/**
	 * Top level branding. Defaults to "IBM"
	 */
	@Input() brand = "IBM";

	constructor(public i18n: I18n) { }
}
