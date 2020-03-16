// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChevronDownModule, WarningFilledModule } from "@carbon/icons-angular";

// imports
import { Select } from "./select.component";
import { Option } from "./option.directive";
import { OptGroup } from "./optgroup.directive";

@NgModule({
	declarations: [
		Select,
		Option,
		OptGroup
	],
	exports: [
		Select,
		Option,
		OptGroup
	],
	imports: [
		CommonModule,
		FormsModule,
		ChevronDownModule,
		WarningFilledModule
	]
})
export class SelectModule { }
