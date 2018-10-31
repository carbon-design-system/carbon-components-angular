// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxModule } from "../checkbox/checkbox.module";
import { ToggleModule } from "../toggle/toggle.module";
import { RadioModule } from "../radio/radio.module";
import { InputModule } from "../input/input.module";
import { ButtonModule } from "../button/button.module";

// exports
export { CheckboxModule } from "../checkbox/checkbox.module";
export { ToggleModule } from "../toggle/toggle.module";
export { RadioModule } from "../radio/radio.module";
export { InputModule } from "../input/input.module";
export { ButtonModule } from "../button/button.module";

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
