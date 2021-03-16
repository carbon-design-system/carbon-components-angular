import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Link } from "./link.directive";

@NgModule({
	declarations: [
		Link
	],
	exports: [
		Link
	],
	imports: [
		CommonModule
	]
})
export class LinkModule {}
