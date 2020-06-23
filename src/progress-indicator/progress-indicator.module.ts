import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkOutlineModule, WarningModule } from "@carbon/icons-angular";

import { ProgressIndicator } from "./progress-indicator.component";
import { DialogModule } from "carbon-components-angular/dialog";
import { ExperimentalModule } from "carbon-components-angular/experimental";

@NgModule({
	declarations: [
		ProgressIndicator
	],
	exports: [
		ProgressIndicator
	],
	imports: [
		CommonModule,
		DialogModule,
		ExperimentalModule,
		CheckmarkOutlineModule,
		WarningModule
	]
})
export class ProgressIndicatorModule { }
