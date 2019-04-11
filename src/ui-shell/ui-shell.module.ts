import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../i18n/i18n.module";

import { Header } from "./header.component";
import { HeaderItem } from "./header-item.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderNavigation } from "./header-navigation.component";
import { HeaderGlobal } from "./header-global.component";
import { HeaderAction } from "./header-action.component";

import { Hamburger } from "./hamburger.component";

import { SideNav } from "./sidenav.component";
import { SideNavHeader } from "./sidenav-header.component";
import { SideNavItem } from "./sidenav-item.component";
import { SideNavMenu } from "./sidenav-menu.component";

export {
	Header,
	HeaderItem,
	HeaderMenu,
	HeaderNavigation,
	HeaderGlobal,
	HeaderAction,
	Hamburger,
	SideNav,
	SideNavHeader,
	SideNavItem,
	SideNavMenu
};

@NgModule({
	declarations: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger,
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	],
	imports: [CommonModule, I18nModule],
	exports: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger,
		SideNav,
		SideNavHeader,
		SideNavItem,
		SideNavMenu
	]
})
export class UIShellModule { }
