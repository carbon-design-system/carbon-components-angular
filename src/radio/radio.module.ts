// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { RadioComponent, RadioGroup } from "../radio/radio.component";

// exports
export { RadioComponent, RadioGroup } from "../radio/radio.component";

@NgModule({
	declarations: [
		RadioComponent,
		RadioGroup
	],
	exports: [
		RadioComponent,
		RadioGroup
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class RadioModule { }
