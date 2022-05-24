import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopoverModule } from "carbon-components-angular/popover";
import { Tooltip } from "./tooltip.component";

@NgModule({
	declarations: [
		Tooltip,
	],
	exports: [
		Tooltip,
	],
	imports: [CommonModule, PopoverModule]
})
export class TooltipModule {}
