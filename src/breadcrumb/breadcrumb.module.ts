import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "../";

import { BreadcrumbComponent } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";

export { BreadcrumbComponent } from "./breadcrumb.component";
export { BreadcrumbItemComponent } from "./breadcrumb-item.component";
export { BreadcrumbItem } from "./breadcrumb-item.interface";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		BreadcrumbItemComponent
	],
	exports: [
		BreadcrumbComponent,
		BreadcrumbItemComponent
	],
	imports: [
		CommonModule,
		DialogModule
	]
})
export class BreadcrumbModule { }
