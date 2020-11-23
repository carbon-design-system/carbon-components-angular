import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Pagination } from "./pagination.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Pagination
	],
	exports: [
		Pagination
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		ExperimentalModule,
		IconModule
	]
})
export class PaginationModule {}
