// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxModule } from "carbon-components-angular/checkbox";
import { ToggleModule } from "carbon-components-angular/toggle";
import { RadioModule } from "carbon-components-angular/radio";
import { InputModule } from "carbon-components-angular/input";
import { ButtonModule } from "carbon-components-angular/button";

@NgModule({
	exports: [
		CheckboxModule,
		ToggleModule,
		RadioModule,
		InputModule,
		ButtonModule,
		InputModule
	],
	imports: [
		CommonModule,
		FormsModule,
		CheckboxModule,
		ToggleModule,
		RadioModule,
		InputModule,
		ButtonModule
	]
})
export class NFormsModule { }
