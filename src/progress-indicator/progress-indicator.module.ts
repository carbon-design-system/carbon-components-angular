import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
import { ExperimentalModule } from "./../experimental.module";


@NgModule({
	declarations: [
		ProgressIndicator
	],
	exports: [
		ProgressIndicator
	],
	imports: [CommonModule, ExperimentalModule]
})
export class ProgressIndicatorModule { }
