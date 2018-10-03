// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { LabelComponent } from "./label.component";
import { TextInput, TextAreaInput } from "./input.directive";

@NgModule({
	declarations: [
		LabelComponent,
		TextInput,
		TextAreaInput
	],
	exports: [
		LabelComponent,
		TextInput,
		TextAreaInput
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
class InputModule { }

export { TextInput, LabelComponent, InputModule };
