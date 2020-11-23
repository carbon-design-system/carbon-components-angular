// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// imports
import { Select } from "./select.component";
import { Option } from "./option.directive";
import { OptGroup } from "./optgroup.directive";
import { IconModule } from "carbon-components-angular/icon";

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
		IconModule
	]
})
export class SelectModule { }
