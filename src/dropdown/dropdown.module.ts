import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";
import { DropdownDirective } from "./dropdown.directive";

export { Dropdown } from "./dropdown.component";
export { DropdownDirective } from "./dropdown.directive";

@NgModule({
	declarations: [
		Dropdown,
		DropdownDirective
	],
	exports: [
		Dropdown,
		DropdownDirective
	],
	imports: [CommonModule, BrowserModule],
})
export class DropdownModule {}
