import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InlineLoading } from "./inline-loading.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [InlineLoading],
	imports: [CommonModule, IconDirective, InlineLoading]
})
export class InlineLoadingModule { }
