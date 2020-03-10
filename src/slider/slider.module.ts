import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Slider } from "./slider.component";
import { UtilsModule } from "../utils/utils.module";

@NgModule({
	declarations: [Slider],
	exports: [Slider],
	imports: [
		CommonModule,
		UtilsModule
	]
})
class SliderModule {}

export {
	SliderModule,
	Slider
};
