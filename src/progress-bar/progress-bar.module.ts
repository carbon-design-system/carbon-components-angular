import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressBar } from "./progress-bar.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		ProgressBar
	],
	imports: [
		CommonModule,
		IconDirective,
		ProgressBar
	]
})
export class ProgressBarModule { }
