import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Popover } from "./popover.component";

export { Popover } from "./popover.component";

@NgModule({
	declarations: [
		Popover
	],
	exports: [
		Popover
	],
	imports: [CommonModule, BrowserModule]
})
export class PopoverModule {}
