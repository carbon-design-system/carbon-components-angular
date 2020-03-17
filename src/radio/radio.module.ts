// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Radio } from "./radio.component";
import { RadioGroup } from "./radio-group.component";
import { RadioChange } from "./radio-change.class";


// exports
export {
	Radio,
	RadioGroup,
	RadioChange
};

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
