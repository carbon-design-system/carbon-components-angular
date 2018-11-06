// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Radio } from "../radio/radio.component";
import { RadioGroup } from "../radio/radio-group.component";


// exports
export { Radio } from "../radio/radio.component";
export { RadioGroup } from "../radio/radio-group.component";

@NgModule({
	declarations: [
		Radio,
		RadioGroup
	],
	exports: [
		Radio,
		RadioGroup
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class RadioModule { }
