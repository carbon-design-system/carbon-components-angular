import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaticIconModule } from "./../icon/static-icon.module";

import { PillInput } from "./pill-input.component";
import { Pill } from "./pill.component";

export { PillInput } from "./pill-input.component";
export { Pill } from "./pill.component";


@NgModule({
	declarations: [
		Pill,
		PillInput
	],
	exports: [
		Pill,
		PillInput
	],
	imports: [CommonModule, StaticIconModule]
})
export class PillInputModule {}
