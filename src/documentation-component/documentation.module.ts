import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Documentation } from "./documentation.component";

export { Documentation } from "./documentation.component";

@NgModule({
	declarations: [
		Documentation
	],
	exports: [
		Documentation
	],
	imports: [
		CommonModule
	]
})
export class DocumentationModule { }
