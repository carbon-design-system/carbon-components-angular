import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayerDirective } from "./layer.directive";

@NgModule({
	exports: [LayerDirective],
	imports: [
		CommonModule,
		LayerDirective
	]
})
export class LayerModule {}
