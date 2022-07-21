import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "carbon-components-angular/dialog";
import { I18nModule } from "carbon-components-angular/i18n";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";

@NgModule({
	declarations: [
		Breadcrumb,
		BreadcrumbItemComponent
	],
	exports: [
		Breadcrumb,
		BreadcrumbItemComponent
	],
	imports: [
		CommonModule,
		DialogModule,
		I18nModule
	]
})
export class BreadcrumbModule { }
