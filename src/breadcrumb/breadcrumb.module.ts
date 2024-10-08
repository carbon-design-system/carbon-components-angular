import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "carbon-components-angular/dialog";
import { I18nModule } from "carbon-components-angular/i18n";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
import { ButtonModule } from "carbon-components-angular/button";
import { IconModule } from "carbon-components-angular/icon";

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
		ButtonModule,
		DialogModule,
		I18nModule,
		IconModule
	]
})
export class BreadcrumbModule { }
