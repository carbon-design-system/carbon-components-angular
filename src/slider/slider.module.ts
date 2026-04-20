import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Slider } from "./slider.component";
import { UtilsModule } from "carbon-components-angular/utils";

@NgModule({
	exports: [Slider],
	imports: [
		CommonModule,
		UtilsModule,
		Slider
	]
})
export class SliderModule {}
