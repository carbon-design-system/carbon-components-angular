import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Sample } from "./sample.component";
import { SampleSub } from "./subcomponent/sample-sub.component";

export { Sample } from "./sample.component";
export { SampleSub } from "./subcomponent/sample-sub.component";

export { SampleBase } from "./sample-base.class";
export { SampleInterface } from "./sample.interface";

@NgModule({
	declarations: [
		Sample,
		SampleSub
	],
	exports: [
		Sample,
		SampleSub
	],
	imports: [
		CommonModule
	]
})
export class SampleModule {}
