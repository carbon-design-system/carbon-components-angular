// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxModule } from "carbon-components-angular/checkbox/checkbox.module";
import { ToggleModule } from "carbon-components-angular/toggle/toggle.module";
import { RadioModule } from "carbon-components-angular/radio/radio.module";
import { InputModule } from "carbon-components-angular/input/input.module";
import { ButtonModule } from "carbon-components-angular/button/button.module";

@NgModule({
	exports: [
		CheckboxModule,
		ToggleModule,
		RadioModule,
		InputModule,
		ButtonModule
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
