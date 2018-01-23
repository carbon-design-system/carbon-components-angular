import { Component } from "@angular/core";

@Component({
	selector: "n-button-menu-item",
	template: `
		<li role="menuitem" tabindex="0">
			<ng-content></ng-content>
		</li>`
})
export class ButtonMenuItem {
	public size: "sm" | "default" | "lg" = "default";
}
