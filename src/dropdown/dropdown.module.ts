import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Dropdown } from "./dropdown.component";

export { Dropdown } from "./dropdown.component";

@NgModule({
	declarations: [
		Dropdown
	],
	exports: [
		Dropdown
	],
	imports: [CommonModule, BrowserModule],
})
export class DropdownModule {}
