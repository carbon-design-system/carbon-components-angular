// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Label } from "./label.component";
import { TextInput } from "./input.directive";
import { TextArea } from "./text-area.directive";
import { TextareaLabelComponent } from "./textarea-label.component";
import { TextInputLabelComponent } from "./text-input-label.component";
import { IconModule } from "carbon-components-angular/icon";
import { PasswordInput } from "./password.directive";
import { PasswordInputLabelComponent } from "./password-input-label.component";
import { TooltipModule } from "carbon-components-angular/tooltip";
import { ButtonModule } from "carbon-components-angular/button";

@NgModule({
	declarations: [
		Label,
		TextInput,
		TextArea,
		PasswordInput,
		TextareaLabelComponent,
		TextInputLabelComponent,
		PasswordInputLabelComponent
	],
	exports: [
		Label,
		TextareaLabelComponent,
		TextInputLabelComponent,
		PasswordInputLabelComponent,
		TextInput,
		TextArea,
		PasswordInput
	],
	imports: [
		CommonModule,
		FormsModule,
		IconModule,
		ButtonModule,
		TooltipModule
	]
})
export class InputModule { }
