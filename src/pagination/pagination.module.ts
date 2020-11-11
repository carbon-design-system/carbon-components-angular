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
import { PaginationNav } from "./pagination-nav";
import { PaginationNavItem } from "./pagination-nav";
import { PaginationOverflow } from "./pagination-nav";
import { IconModule } from "carbon-components-angular/icon";

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
		OverflowMenuHorizontalModule,
		IconModule
	]
})
export class PaginationModule {}
