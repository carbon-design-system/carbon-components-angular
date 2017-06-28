import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox.component";
import { SwitchComponent } from "./switch.component";
import { LabelComponent } from "./label.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		CheckboxComponent,
		SwitchComponent,
		LabelComponent
	],
	exports: [
		CheckboxComponent,
		SwitchComponent,
		LabelComponent
	]
})
export class NFormsModule { }
