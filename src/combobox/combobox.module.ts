import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";
import { PillInputModule } from "./../pill-input/pill-input.module";

import { ComboBox } from "./combobox.component";

export { ComboBox } from "./combobox.component";


@NgModule({
	declarations: [
		ComboBox
	],
	exports: [
		ComboBox
	],
	imports: [
		CommonModule,
		PillInputModule,
		StaticIconModule
	]
})
export class ComboBoxModule {}
