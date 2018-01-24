// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";

// imports
import { CheckboxComponent } from "./checkbox.component";
import { SwitchComponent } from "./switch.component";
import { RadioComponent, RadioGroup } from "./radio.component";
import { LabelComponent } from "./label.component";

// exports
export { CheckboxComponent } from "./checkbox.component";
export { SwitchComponent } from "./switch.component";
export { RadioComponent, RadioGroup } from "./radio.component";
export { LabelComponent } from "./label.component";

@NgModule({
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
	],
	imports: [
		CommonModule,
		FormsModule,
		StaticIconModule
	]
})
export class NFormsModule { }
