import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";

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
		DropdownModule,
		ChevronDown16Module
	]
})
export class ComboBoxModule {}
