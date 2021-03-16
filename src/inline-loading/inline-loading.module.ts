import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InlineLoading } from "./inline-loading.component";
import { IconModule } from "carbon-components-angular/icon";


@NgModule({
	declarations: [InlineLoading],
	exports: [InlineLoading],
	imports: [CommonModule, IconModule]
})
export class InlineLoadingModule { }
