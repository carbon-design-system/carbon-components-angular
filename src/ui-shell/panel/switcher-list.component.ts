import { Component } from "@angular/core";

/**
 * Container for switcher items.
 *
 * ```html
 * <ibm-switcher-list>
 * 	<ibm-switcher-list-item>one</ibm-switcher-list-item>
 * 	<ibm-switcher-list-item [active]="true">two</ibm-switcher-list-item>
 * 	<ibm-switcher-list-item>three</ibm-switcher-list-item>
 * </ibm-switcher-list>
 * ```
 *
 * **Note**: `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
@Component({
	selector: "ibm-switcher-list, ibm-product-switcher-list",
	template: `
		<ul class="bx--switcher__item">
			<ng-content></ng-content>
		</ul>
	`
})
export class SwitcherList {}
