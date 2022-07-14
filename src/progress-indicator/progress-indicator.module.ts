import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { IconModule } from "carbon-components-angular/icon";
import { I18nModule } from "carbon-components-angular/i18n";

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
		I18nModule
	]
})
export class ProgressIndicatorModule { }
