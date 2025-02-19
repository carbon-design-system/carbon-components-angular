import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule } from "carbon-components-angular/button";
import { IconModule } from "carbon-components-angular/icon";
import { ContextMenuModule } from "carbon-components-angular/context-menu";

import { MenuButtonComponent } from "./menu-button.component";

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		IconModule,
		ContextMenuModule
	],
	exports: [MenuButtonComponent],
	declarations: [MenuButtonComponent],
	providers: []
})
export class MenuButtonModule { }
