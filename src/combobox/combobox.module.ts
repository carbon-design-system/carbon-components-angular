import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";
import { PillInputModule } from "./../pill-input/pill-input.module";

import { ComboBox } from "./combobox.component";
import { DropdownModule } from "../dropdown/dropdown.module";

export { ComboBox } from "./combobox.component";


@NgModule({
	declarations: [
		ComboBox
	],
	exports: [
		ComboBox,
		DropdownModule
	],
	imports: [
		CommonModule,
		PillInputModule,
		StaticIconModule,
		DropdownModule
	]
})
export class ComboBoxModule {}
