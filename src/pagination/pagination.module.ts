import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";
import { CaretLeft16Module } from "@carbon/icons-angular/lib/caret--left/16";
import { CaretRight16Module } from "@carbon/icons-angular/lib/caret--right/16";

import { Pagination } from "./pagination.component";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";

export { PaginationModel } from "./pagination-model.class";
export { Pagination } from "./pagination.component";

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
		ChevronDown16Module,
		CaretLeft16Module,
		CaretRight16Module
	]
})
export class PaginationModule {}
