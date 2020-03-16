import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkOutlineModule, WarningModule } from "@carbon/icons-angular";

import { ProgressIndicator } from "./progress-indicator.component";
import { DialogModule } from "./../dialog/dialog.module";
import { ExperimentalModule } from "./../experimental.module";

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
