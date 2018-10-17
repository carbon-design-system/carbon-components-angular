// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { LabelComponent } from "./label.component";
import { TextInput } from "./input.directive";
import { TextArea } from "./text-area.directive";

@NgModule({
	declarations: [
		LabelComponent,
		TextInput,
		TextArea
	],
	exports: [
		LabelComponent,
		TextInput,
		TextArea
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
class InputModule { }

export { TextInput, LabelComponent, InputModule };
