import { Component, HostBinding } from "@angular/core";

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
			<ng-content></ng-content>
	`,
	styles: [`
		:host {
			display: block;
		}
	`]
})
export class SwitcherList {
	@HostBinding("class.cds--switcher") switcher = true;
	@HostBinding("attr.role") role = "list";
}
