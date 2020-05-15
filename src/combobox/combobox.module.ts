import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ChevronDownModule,
	CloseModule,
	WarningFilledModule
} from "@carbon/icons-angular";

import { ComboBox } from "./combobox.component";
import { DropdownModule } from "../dropdown/dropdown.module";
import { I18nModule } from "./../i18n/i18n.module";
import { UtilsModule } from "../utils/index";

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
		I18nModule,
		UtilsModule
	]
})
export class ComboBoxModule {}
