// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxModule } from "../checkbox/checkbox.module";
import { SwitchModule } from "../switch/switch.module";
import { RadioModule } from "../radio/radio.module";
import { InputModule } from "../input/input.module";
import { ButtonModule } from "../button/button.module";

// exports
export { CheckboxModule } from "../checkbox/checkbox.module";
export { SwitchModule } from "../switch/switch.module";
export { RadioModule } from "../radio/radio.module";
export { InputModule } from "../input/input.module";
export { ButtonModule } from "../button/button.module";

@NgModule({
	exports: [
		CheckboxModule,
		SwitchModule,
		RadioModule,
		InputModule,
		ButtonModule
	],
	imports: [
		CommonModule,
		FormsModule,
		CheckboxModule,
		SwitchModule,
		RadioModule,
		InputModule,
		ButtonModule
	]
})
export class NFormsModule { }
