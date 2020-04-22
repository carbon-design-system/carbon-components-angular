// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Checkbox } from "./checkbox.component";

@NgModule({
	declarations: [
		Checkbox
	],
	exports: [
		Checkbox
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class CheckboxModule { }
