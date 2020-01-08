import { Component, Input, HostBinding } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

/**
 * Represents an item in a switcher list.
 *
 * **Note:** `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
@Component({
	selector: "ibm-switcher-list-item, ibm-product-switcher-list-item, ibm-product-switcher-item",
	template: `
		<a
			class="bx--switcher__item-link"
			[ngClass]="{
				'bx--switcher__item-link--selected': active
			}"
			[href]="href">
			<ng-content></ng-content>
		</a>
	`
})
export class SwitcherListItem {
	/**
	 * Enables the "active" state for an item. Commonly used to indicate the current page or selection.
	 */
	@Input() active = false;

	/**
	 * Optional link for the underlying anchor.
	 */
	@Input() set href(value: string) {
		this._href = value;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	@HostBinding("class.bx--switcher__item") itemClass = true;

	protected _href = "javascript:void(0)";

	constructor(protected domSanitizer: DomSanitizer) { }
}
