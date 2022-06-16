import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopoverContainer } from "./popover.directive";
import { PopoverContent } from "./popover-content.component";

@NgModule({
	declarations: [
		PopoverContainer,
		PopoverContent
	],
	exports: [
		PopoverContainer,
		PopoverContent
	],
	imports: [CommonModule]
})
export class PopoverModule {}
