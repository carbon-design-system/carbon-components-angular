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
	@HostBinding("class.bx--context-menu-divider") dividerContextClass = true; // deprecated
	@HostBinding("class.bx--menu-divider") dividerClass = true;
	@HostBinding("attr.role") role = "separator";
}
