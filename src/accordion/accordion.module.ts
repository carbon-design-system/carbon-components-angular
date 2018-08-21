import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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
	imports: [CommonModule]
})
export class AccordionModule { }
