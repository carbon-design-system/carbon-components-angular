import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";

import { Accordion } from "./accordion.component";
import { AccordionItem } from "./accordion-item.component";

export { Accordion } from "./accordion.component";
export { AccordionItem } from "./accordion-item.component";

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
		ChevronRight16Module
	]
})
export class AccordionModule { }
