// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { CheckboxComponent } from "./checkbox.component";

// exports
export { CheckboxComponent } from "./checkbox.component";

@NgModule({
	declarations: [
		CheckboxComponent
	],
	exports: [
		CheckboxComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class CheckboxModule { }
