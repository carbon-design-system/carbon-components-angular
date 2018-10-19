// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { RadioComponent } from "../radio/radio.component";
import { RadioGroup } from "../radio/radio-group.component";


// exports
export { RadioComponent } from "../radio/radio.component";
export { RadioGroup } from "../radio/radio-group.component";

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
