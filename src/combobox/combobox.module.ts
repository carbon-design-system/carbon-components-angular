import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";
import { PillModule } from "./../pill/pill.module";

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
		PillModule,
		StaticIconModule
	]
})
export class ComboBoxModule {}
