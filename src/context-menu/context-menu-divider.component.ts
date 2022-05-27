import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-context-menu-divider",
	template: "",
	styles: [`
		:host {
			display: list-item;
			list-style: none;
		}
	`]
})
export class ContextMenuDividerComponent {
	@HostBinding("class.cds--context-menu-divider") dividerContextClass = true; // deprecated
	@HostBinding("class.cds--menu-divider") dividerClass = true;
	@HostBinding("attr.role") role = "separator";
}
