import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

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
		DropdownModule,
		ChevronDown16Module,
		Close16Module
	]
})
export class ComboBoxModule {}
