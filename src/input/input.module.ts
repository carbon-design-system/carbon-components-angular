// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Label } from "./label.component";
import { TextInput } from "./input.directive";
import { TextArea } from "./text-area.directive";

@NgModule({
	declarations: [
		Label,
		TextInput,
		TextArea
	],
	exports: [
		Label,
		TextInput,
		TextArea
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
class InputModule { }

export { TextInput, Label, InputModule };
