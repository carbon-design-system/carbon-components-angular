import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import { AccordionItem } from "./accordion-item.component";

/**
 * [See demo](../../?path=/story/accordion--basic)
 *
 * <example-url>../../iframe.html?id=accordion--basic</example-url>
 */
@Component({
	selector: "ibm-accordion",
	template: `
		<ul class="bx--accordion"
			[class.bx--accordion--end]="align == 'end'"
			[class.bx--accordion--start]="align == 'start'">
			<ng-content></ng-content>
		</ul>
	`
})
export class Accordion implements AfterContentInit {
	@Input() align: "start" | "end" = "end";

	@ContentChildren(AccordionItem) children: QueryList<AccordionItem>;

	protected _skeleton = false;

	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): any {
		return this._skeleton;
	}

	ngAfterContentInit() {
		this.updateChildren();
	}

	protected updateChildren() {
		if (this.children) {
			this.children.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
