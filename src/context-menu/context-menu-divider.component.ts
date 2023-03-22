import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-context-menu-divider, ibm-context-menu-divider",
	template: "",
	styles: [`
		:host {
			display: list-item;
			list-style: none;
		}
	`]
})
export class ContextMenuDividerComponent {
	@HostBinding("class.cds--menu-divider") dividerClass = true;
	@HostBinding("attr.role") role = "separator";
}
