import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
import { DialogModule } from "carbon-components-angular/dialog";
import { IconModule } from "carbon-components-angular/icon";

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
		IconModule
	]
})
export class ProgressIndicatorModule { }
