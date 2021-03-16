import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Accordion } from "./accordion.component";
import { AccordionItem } from "./accordion-item.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		Accordion,
		AccordionItem
	],
	exports: [
		Accordion,
		AccordionItem
	],
	imports: [
		CommonModule,
		IconModule
	]
})
export class AccordionModule { }
