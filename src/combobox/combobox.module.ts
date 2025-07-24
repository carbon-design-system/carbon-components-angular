import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComboBox } from "./combobox.component";
import { DropdownModule, DropdownService } from "carbon-components-angular/dropdown";
import { I18nModule } from "carbon-components-angular/i18n";
import { UtilsModule } from "carbon-components-angular/utils";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		ComboBox,
		DropdownModule
	],
	imports: [
		ComboBox,
		CommonModule,
		DropdownModule,
		I18nModule,
		UtilsModule,
		IconModule
	],
	providers: [ DropdownService ]
})
export class ComboBoxModule {}
