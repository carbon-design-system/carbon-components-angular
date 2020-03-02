import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../../i18n/index";

import { SideNav } from "./sidenav.component";
import { SideNavHeader } from "./sidenav-header.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";

export { SideNavItemInterface } from "./sidenav-item.interface";

export {
	SideNav,
	SideNavHeader,
	SideNavItem,
	SideNavMenu
};

@NgModule({
	declarations: [
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	],
	imports: [CommonModule, I18nModule],
	exports: [
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	]
})
export class SideNavModule { }
