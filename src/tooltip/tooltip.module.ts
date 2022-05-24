import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopoverModule } from "carbon-components-angular/popover";
import { Tooltip } from "./tooltip.component";
import { TooltipDefinition } from "./definition-tooptip.component";

@NgModule({
	declarations: [
		Tooltip,
		TooltipDefinition
	],
	exports: [
		Tooltip,
		TooltipDefinition
	],
	imports: [CommonModule, PopoverModule]
})
export class TooltipModule {}
