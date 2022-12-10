import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressBar } from "./progress-bar.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		ProgressBar
	],
	exports: [
		ProgressBar
	],
	imports: [
		CommonModule,
		IconModule
	]
})
export class ProgressBarModule { }
