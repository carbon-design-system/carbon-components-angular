// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Radio } from "./radio.component";
import { RadioGroup } from "./radio-group.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		Radio,
		RadioGroup
	],
	imports: [
		CommonModule,
		FormsModule,
		IconDirective,
		Radio,
		RadioGroup
	]
})
export class RadioModule { }
