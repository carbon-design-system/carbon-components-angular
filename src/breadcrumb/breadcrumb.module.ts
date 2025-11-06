import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "carbon-components-angular/dialog";
import { I18nModule } from "carbon-components-angular/i18n";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
import { ButtonModule } from "carbon-components-angular/button";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		Breadcrumb,
		BreadcrumbItemComponent
	],
	imports: [
		Breadcrumb,
		BreadcrumbItemComponent,
		CommonModule,
		ButtonModule,
		DialogModule,
		I18nModule,
		IconModule
	]
})
export class BreadcrumbModule { }
