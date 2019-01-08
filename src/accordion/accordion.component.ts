import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import { AccordionItem } from "./accordion-item.component";

@Component({
	selector: "ibm-accordion",
	template: `
		<ul class="bx--accordion">
			<ng-content></ng-content>
		</ul>
	`
})
export class Accordion implements AfterContentInit {
	@ContentChildren(AccordionItem) childs: QueryList<AccordionItem>;

	@Input() skeleton = false;

	ngAfterContentInit() {
		this.childs.toArray().forEach(child => child.skeleton = this.skeleton);
	}
}
