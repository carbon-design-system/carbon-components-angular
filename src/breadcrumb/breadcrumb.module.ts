import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "../";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";

export { Breadcrumb } from "./breadcrumb.component";
export { BreadcrumbItemComponent } from "./breadcrumb-item.component";
export { BreadcrumbItem } from "./breadcrumb-item.interface";

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
		DialogModule
	]
})
export class BreadcrumbModule { }