import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
	ChevronDownModule,
	CaretLeftModule,
	CaretRightModule,
	OverflowMenuHorizontalModule
} from "@carbon/icons-angular";

import { PaginationNav } from "./pagination-nav.component";
import { PaginationNavItem } from "./pagination-item.component";
import { I18nModule } from "carbon-components-angular/i18n";
import { ExperimentalModule } from "carbon-components-angular/experimental";
import { PaginationOverflow } from "./pagination-overflow.component";

@NgModule({
	declarations: [
		PaginationNav,
		PaginationNavItem,
		PaginationOverflow
	],
	exports: [
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
export class PaginationNavModule {}
