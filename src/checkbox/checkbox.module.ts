// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Checkbox } from "./checkbox.component";
import { CheckboxGroup } from "./checkbox-group.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Checkbox,
		CheckboxGroup
	],
	exports: [
		Checkbox,
		CheckboxGroup
	],
	imports: [
		CommonModule,
		FormsModule,
		IconModule
	]
})
export class CheckboxModule { }
