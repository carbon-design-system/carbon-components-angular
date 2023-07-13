import { Component, HostBinding } from "@angular/core";

/**
 * Container for switcher items.
 *
 * ```html
 * <cds-switcher-list>
 * 	<cds-switcher-list-item>one</cds-switcher-list-item>
 * 	<cds-switcher-list-item [active]="true">two</cds-switcher-list-item>
 * 	<cds-switcher-list-item>three</cds-switcher-list-item>
 * </cds-switcher-list>
 * ```
 */
@Component({
	selector: "cds-switcher-list, ibm-switcher-list",
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
