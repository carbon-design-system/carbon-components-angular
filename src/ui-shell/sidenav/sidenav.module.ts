import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "carbon-components-angular/i18n";

import { SideNav } from "./sidenav.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";

export { SideNavItemInterface } from "./sidenav-item.interface";

export {
	SideNav,
	SideNavItem,
	SideNavMenu
};

@NgModule({
	declarations: [
		SideNav,
		SideNavItem,
		SideNavMenu
	],
	imports: [CommonModule, I18nModule],
	exports: [
		SideNav,
		SideNavItem,
		SideNavMenu
	]
})
export class SideNavModule { }
