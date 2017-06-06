import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComboBox } from "./combo-box.component";
import { PillInput } from "./pill-input.component";
import { Pill } from "./pill.component";
import { DropdownButton } from "./dropdown-button.component";

export { ComboBox } from "./combo-box.component";
export { PillInput } from "./pill-input.component";
export { Pill } from "./pill.component";
export { DropdownButton } from "./dropdown-button.component";


@NgModule({
	declarations: [
		DropdownButton,
		Pill,
		PillInput,
		ComboBox
	],
	exports: [
		DropdownButton,
		Pill,
		PillInput,
		ComboBox
	],
	imports: [CommonModule]
})
export class ComboBoxModule {}
