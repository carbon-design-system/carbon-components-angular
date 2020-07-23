import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ChevronDownModule,
	CloseModule,
	WarningFilledModule
} from "@carbon/icons-angular";

import { ComboBox } from "./combobox.component";
import { DropdownModule, DropdownService } from "carbon-components-angular/dropdown";
import { I18nModule } from "carbon-components-angular/i18n";
import { UtilsModule } from "carbon-components-angular/utils";

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
	],
	providers: [ DropdownService ]
})
export class ComboBoxModule {}
