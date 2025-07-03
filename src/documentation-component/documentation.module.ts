import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Documentation } from "./documentation.component";

export { Documentation } from "./documentation.component";

@NgModule({
	exports: [
		Documentation
	],
	imports: [
		Documentation,
		CommonModule
	]
})
export class DocumentationModule { }
