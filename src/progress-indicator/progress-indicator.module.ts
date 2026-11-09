import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProgressIndicator } from "./progress-indicator.component";
import { IconDirective } from "carbon-components-angular/icon";
import { I18nModule } from "carbon-components-angular/i18n";

@NgModule({
	exports: [
		ProgressIndicator
	],
	imports: [
		CommonModule,
		IconDirective,
		I18nModule,
		ProgressIndicator
	]
})
export class ProgressIndicatorModule {}
