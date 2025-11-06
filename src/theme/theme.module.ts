import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeDirective } from "./theme.directive";
import { LayerModule } from "carbon-components-angular/layer";

@NgModule({
	declarations: [],
	exports: [ThemeDirective],
	imports: [
		CommonModule,
		LayerModule,
		ThemeDirective
	]
})
export class ThemeModule {}
