import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuButtonComponent } from "./menu-button.component";
import { ButtonModule } from "../button";
import { IconModule } from "carbon-components-angular/icon";
import { ContextMenuModule } from "carbon-components-angular/context-menu";

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
