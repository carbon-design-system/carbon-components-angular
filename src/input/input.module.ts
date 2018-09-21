// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { LabelComponent } from "./label.component";
import { TextInput } from "./input.directive";

@NgModule({
	declarations: [
		LabelComponent,
		TextInput
	],
	exports: [
		LabelComponent,
		TextInput
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
class InputModule { }

export { TextInput, LabelComponent, InputModule };
