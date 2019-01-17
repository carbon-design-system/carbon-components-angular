import { NgModule } from "@angular/core";
import { Slider } from "./slider.component";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [Slider],
	exports: [Slider],
	imports: [CommonModule]
})
class SliderModule {}

export {
	SliderModule,
	Slider
};
