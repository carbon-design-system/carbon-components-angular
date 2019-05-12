import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import { AccordionItem } from "./accordion-item.component";

/**
 * demo: [https://angular.carbondesignsystem.com/?path=/story/accordion--basic](../../?path=/story/accordion--basic)
 *
 * <example-url>../../iframe.html?id=accordion--basic</example-url>
 *
 * @export
 * @class Accordion
 * @implements {AfterContentInit}
 */
@Component({
	selector: "ibm-accordion",
	template: `
		<ul class="bx--accordion">
			<ng-content></ng-content>
		</ul>
	`
})
export class Accordion implements AfterContentInit {
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
