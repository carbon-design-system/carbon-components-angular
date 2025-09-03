import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-menu-divider, cds-context-menu-divider, ibm-context-menu-divider",
	template: "",
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true
})
export class ContextMenuDividerComponent {
	@HostBinding("class.cds--menu-item-divider") dividerClass = true;
	@HostBinding("attr.role") role = "separator";
}
