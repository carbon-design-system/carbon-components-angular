import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconModule } from "carbon-components-angular/icon";
import { ContextMenuModule } from "carbon-components-angular/context-menu";
import { ButtonModule } from "carbon-components-angular/button";

import { ComboButtonComponent } from "./combo-button.component";

@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		IconModule,
		ContextMenuModule,
		ComboButtonComponent
	],
	exports: [ComboButtonComponent]
})
export class ComboButtonModule { }
