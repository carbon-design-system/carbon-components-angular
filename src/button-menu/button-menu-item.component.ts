import { Component, Input } from "@angular/core";
import { ButtonMenu } from "./button-menu.component";

@Component({
	selector: "n-button-menu-item",
	template: `
		<li role="menuitem" tabindex="-1" (click)="closeMenu()">
			<ng-content></ng-content>
		</li>`
})
export class ButtonMenuItem {
	@Input() parent: ButtonMenu;
	public size: "sm" | "md" | "default" | "lg" = "md";

	closeMenu() {
		if (this.parent) {
			this.parent.closeMenu();
		}
	}
}
