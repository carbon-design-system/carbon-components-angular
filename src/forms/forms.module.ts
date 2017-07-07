import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox.component";
import { SwitchComponent } from "./switch.component";
import { RadioComponent, RadioGroup } from "./radio.component";
import { LabelComponent } from "./label.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		CheckboxComponent,
		SwitchComponent,
		RadioComponent,
		RadioGroup,
		LabelComponent
	],
	exports: [
		CheckboxComponent,
		SwitchComponent,
		RadioComponent,
		RadioGroup,
		LabelComponent
	]
})
export class NFormsModule { }
