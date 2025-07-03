import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopoverContainer } from "./popover.directive";
import { PopoverContent } from "./popover-content.component";

@NgModule({
	exports: [
		PopoverContainer,
		PopoverContent
	],
	imports: [
		CommonModule,
		PopoverContainer,
		PopoverContent
	]
})
export class PopoverModule {}
