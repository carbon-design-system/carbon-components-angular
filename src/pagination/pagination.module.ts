import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
	ChevronDownModule,
	CaretLeftModule,
	CaretRightModule,
	OverflowMenuHorizontalModule
} from "@carbon/icons-angular";

import { Pagination } from "./pagination.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import {
	PaginationNav,
	PaginationNavItem,
	PaginationOverflow
} from "./pagination-nav";

@NgModule({
	declarations: [
		Pagination,
		PaginationNav,
		PaginationNavItem,
		PaginationOverflow
	],
	exports: [
		Pagination,
		PaginationNav,
		PaginationNavItem,
		PaginationOverflow
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		ExperimentalModule,
		ChevronDownModule,
		CaretLeftModule,
		CaretRightModule,
		OverflowMenuHorizontalModule
	]
})
export class PaginationModule {}
