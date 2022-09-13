import { Component, Input } from "@angular/core";
import { NavigationItem } from "../";

@Component({
	selector: "app-bar",
	template: "<h1>bar</h1>"
})
export class BarComponent { }

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
export class FooComponent { }

@Component({
	selector: "app-header-fluid",
	template: `
		<ibm-header name="[Platform]">
			<ibm-hamburger
				(selected)="hasHamburger = !hasHamburger"
				class="cds--header__menu-toggle__hidden"></ibm-hamburger>
			<ibm-header-navigation [navigationItems]="headerItems"></ibm-header-navigation>
			<ibm-sidenav
				*ngIf="hasHamburger"
				[navigationItems]="headerItems"
				class="cds--header__menu-toggle__hidden"></ibm-sidenav>
		</ibm-header>
	`
})
export class HeaderFluidComponent {
	@Input() headerItems: NavigationItem[];
	hasHamburger = false;
}
