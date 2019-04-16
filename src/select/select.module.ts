// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";

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
		ChevronDown16Module
	]
})
class SelectModule { }

export { Select, Option, OptGroup, SelectModule };
