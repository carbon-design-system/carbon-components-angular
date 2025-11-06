import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Button } from "./button.directive";
import { ButtonSet } from "./button-set.component";
import { BaseIconButton } from "./base-icon-button.component";
import { IconButton } from "./icon-button.component";

import { TooltipModule } from "carbon-components-angular/tooltip";

@NgModule({
	exports: [
		Button,
		ButtonSet,
		IconButton
	],
	imports: [
		CommonModule,
		TooltipModule,
		Button,
		ButtonSet,
		BaseIconButton,
		IconButton
	]
})
export class ButtonModule { }
