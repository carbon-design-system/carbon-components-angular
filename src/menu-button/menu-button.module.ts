import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { IconDirective } from "carbon-components-angular/icon";
import { ContextMenuModule } from "carbon-components-angular/context-menu";

import { MenuButtonComponent } from "./menu-button.component";

@NgModule({
	imports: [
		CommonModule,
		IconDirective,
		ContextMenuModule,
		MenuButtonComponent
	],
	exports: [MenuButtonComponent],
	providers: []
})
export class MenuButton { }
