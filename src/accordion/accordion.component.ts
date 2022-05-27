import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import { AccordionItem } from "./accordion-item.component";

/**
 * [See demo](../../?path=/story/components-accordion--basic)
 *
 * <example-url>../../iframe.html?id=components-accordion--basic</example-url>
 */
@Component({
	selector: "ibm-accordion",
	template: `
		<ul class="cds--accordion"
			[class.cds--accordion--end]="align == 'end'"
			[class.cds--accordion--start]="align == 'start'">
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
