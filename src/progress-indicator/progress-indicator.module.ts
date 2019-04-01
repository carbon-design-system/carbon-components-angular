import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckmarkOutline16Module } from "@carbon/icons-angular/lib/checkmark--outline/16";
import { ErrorOutline16Module } from "@carbon/icons-angular/lib/error--outline/16";

import { ProgressIndicator } from "./progress-indicator.component";
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
		ExperimentalModule,
		CheckmarkOutline16Module,
		ErrorOutline16Module
	]
})
export class ProgressIndicatorModule { }
