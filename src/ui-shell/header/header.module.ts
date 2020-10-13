import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CloseModule, MenuModule } from "@carbon/icons-angular";

import { I18nModule } from "carbon-components-angular/i18n";

import { Header } from "./header.component";
import { HeaderItem } from "./header-item.component";
import { HeaderMenu } from "./header-menu.component";
import { HeaderNavigation } from "./header-navigation.component";
import { HeaderGlobal } from "./header-global.component";
import { HeaderAction } from "./header-action.component";

import { Hamburger } from "./hamburger.component";
import { RouterModule } from "@angular/router";

export { HeaderItemInterface, NavigationItem } from "./header-navigation-items.interface";

export {
	Header,
	HeaderItem,
	HeaderMenu,
	HeaderNavigation,
	HeaderGlobal,
	HeaderAction,
	Hamburger
};

@NgModule({
	declarations: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger
	],
	imports: [
		CommonModule,
		I18nModule,
		CloseModule,
		MenuModule,
		RouterModule
	],
	exports: [
		Header,
		HeaderItem,
		HeaderMenu,
		HeaderNavigation,
		HeaderGlobal,
		HeaderAction,
		Hamburger
	]
})
export class HeaderModule { }
