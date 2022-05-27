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
 */
@Component({
	selector: "ibm-switcher-list",
	template: `
		<ul class="cds--switcher">
			<ng-content></ng-content>
		</ul>
	`
})
export class SwitcherList {}
