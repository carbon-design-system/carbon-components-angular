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
 */
@Component({
	selector: "cds-accordion, ibm-accordion",
	template: `
		<div class="cds--accordion"
			[ngClass]="{
				'cds--accordion--end': align === 'end',
				'cds--accordion--start': align === 'start',
				'cds--accordion--sm': size === 'sm',
				'cds--accordion--md': size ==='md',
				'cds--accordion--lg': size === 'lg',
				'cds--layout--size-sm': size === 'sm',
				'cds--layout--size-md': size === 'md',
				'cds--layout--size-lg': size === 'lg'
			}"
			role="list">
			<ng-content></ng-content>
		</div>
	`
})
export class Accordion implements AfterContentInit {
	/**
	 * Sets the alignment of the chevron icon
	 */
	@Input() align: "start" | "end" = "end";

	/**
	 *	@todo remove `cds--accordion--${size}` classes in v12
	 */
	/**
	 * Sets the size of all accordian items
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

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
