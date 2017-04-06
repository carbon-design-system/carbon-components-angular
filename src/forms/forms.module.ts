import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		CheckboxComponent
	],
	exports: [
		CheckboxComponent
	]
})
export class CDLFormsModule { }
