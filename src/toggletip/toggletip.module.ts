import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopoverModule } from "carbon-components-angular/popover";

import { ToggletipLabel } from "./toggletip-label.directive";
import { ToggletipAction } from "./toggletip-action.directive";
import { Toggletip } from "./toggletip.component";
import { ToggletipButton } from "./toggletip-button.directive";
import { ToggletipContent } from "./toggletip-content.directive";

@NgModule({
	declarations: [
		Toggletip,
		ToggletipLabel,
		ToggletipAction,
		ToggletipButton,
		ToggletipContent
	],
	exports: [
		Toggletip,
		ToggletipLabel,
		ToggletipAction,
		ToggletipButton,
		ToggletipContent
	],
	imports: [CommonModule, PopoverModule]
})
export class ToggletipModule {}
