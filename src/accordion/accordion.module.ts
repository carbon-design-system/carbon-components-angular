import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Accordion } from "./accordion.component";
import { AccordionItem } from "./accordion-item.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		Accordion,
		AccordionItem
	],
	imports: [
		CommonModule,
		IconModule,
		Accordion,
		AccordionItem
	]
})
export class AccordionModule { }
