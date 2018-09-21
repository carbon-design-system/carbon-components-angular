import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoadingComponent, SmallLoadingComponent } from "./loading.component";

@NgModule({
	declarations: [
		LoadingComponent,
		SmallLoadingComponent
	],
	exports: [
		LoadingComponent,
		SmallLoadingComponent
	],
	imports: [CommonModule]
})
export class LoadingModule { }
