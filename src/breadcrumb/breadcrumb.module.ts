import { IconModule } from "./../icon/icon.module";
import { DialogModule } from "./../dialog/dialog.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { StaticIconModule } from "./../icon/static-icon.module";

import { Breadcrumb } from "./breadcrumb.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [
		Breadcrumb
	],
	exports: [
		Breadcrumb
	],
	entryComponents: [Breadcrumb],
	imports: [CommonModule, TranslateModule, StaticIconModule, RouterModule, DialogModule, IconModule]
})
export class BreadcrumbModule {}
