import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComboBox } from "./combobox.component";
import { PillInput } from "./pill-input.component";
import { Pill } from "./pill.component";

export { ComboBox } from "./combobox.component";
export { PillInput } from "./pill-input.component";
export { Pill } from "./pill.component";


@NgModule({
	declarations: [
		Pill,
		PillInput,
		ComboBox
	],
	exports: [
		Pill,
		PillInput,
		ComboBox
	],
	imports: [CommonModule]
})
export class ComboBoxModule {}
