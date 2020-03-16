import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ChevronDownModule,
	CloseModule,
	WarningFilledModule
} from "@carbon/icons-angular";

import { ComboBox } from "./combobox.component";
import { DropdownModule } from "../dropdown/dropdown.module";
import { UtilsModule } from "../utils/utils.module";

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
		ChevronDownModule,
		CloseModule,
		WarningFilledModule,
		UtilsModule
	]
})
export class ComboBoxModule {}
