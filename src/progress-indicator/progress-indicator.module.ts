import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
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
		IconModule,
		I18nModule
	]
})
export class ProgressIndicatorModule {}
