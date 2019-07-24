// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Label } from "./label.component";
import { TextInput } from "./input.directive";
import { TextArea } from "./text-area.directive";
import { WarningFilled16Module } from "@carbon/icons-angular/lib/warning--filled/16";

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
		FormsModule,
		WarningFilled16Module
	]
})
class InputModule { }

export { TextInput, Label, InputModule };
