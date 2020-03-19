import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChevronRightModule } from "@carbon/icons-angular";

import { Accordion } from "./accordion.component";
import { AccordionItem } from "./accordion-item.component";

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
		ChevronRightModule
	]
})
export class AccordionModule { }
