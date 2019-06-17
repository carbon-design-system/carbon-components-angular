import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { I18nModule } from "./../i18n/i18n.module";

import { HeaderModule } from "./header/header.module";
import { SideNavModule } from "./sidenav/sidenav.module";
import { PanelModule } from "./panel/panel.module";

export * from "./header/header.module";
export * from "./sidenav/sidenav.module";
export * from "./panel/panel.module";

@NgModule({
	imports: [
		CommonModule,
		I18nModule,
		HeaderModule,
		SideNavModule,
		PanelModule
	],
	exports: [
		HeaderModule,
		SideNavModule,
		PanelModule
	]
})
export class UIShellModule { }
