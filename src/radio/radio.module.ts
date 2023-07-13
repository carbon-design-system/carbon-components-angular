// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Radio } from "./radio.component";
import { RadioGroup } from "./radio-group.component";
import { IconModule } from "carbon-components-angular/icon";

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
		FormsModule,
		IconModule
	]
})
export class RadioModule { }
