import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkOutline16Module } from "@carbon/icons-angular/lib/checkmark--outline/16";
import { Warning16Module } from "@carbon/icons-angular/lib/warning/16";

import { ProgressIndicator } from "./progress-indicator.component";
import { DialogModule } from "./../dialog/dialog.module";
import { ExperimentalModule } from "./../experimental.module";

export { ProgressIndicator } from "./progress-indicator.component";

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
		CheckmarkOutline16Module,
		Warning16Module
	]
})
export class ProgressIndicatorModule { }
