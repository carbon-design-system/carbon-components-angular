import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { IconModule } from "carbon-components-angular/icon";
import { TooltipModule } from "carbon-components-angular/tooltip";

@NgModule({
	declarations: [
		ProgressIndicator
	],
	exports: [
		ProgressIndicator
	],
	imports: [
		CommonModule,
		ExperimentalModule,
		IconModule,
		TooltipModule
	]
})
export class ProgressIndicatorModule { }
