import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ChangeDetectionStrategy
} from "@angular/core";
import { AccordionItem } from "./accordion-item.component";
import { NgClass } from "@angular/common";

/**
 * Get started with importing the components:
 *
 * ```typescript
 * import { Accordion, AccordionItem } from 'carbon-components-angular';
 * ```
 *
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
				'cds--layout--size-lg': size === 'lg',
				'cds--accordion--flush': isFlush && align !== 'start'
			}"
			role="list">
			<ng-content />
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgClass]
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

	/**
	 * Specify whether Accordion text should be flush, default is false.
	 * Does not work with `align="start"`.
	 */
	@Input() isFlush = false;

	@ContentChildren(AccordionItem) children: QueryList<AccordionItem>;

	protected _skeleton = false;
	protected _disabled = false;

	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): any {
		return this._skeleton;
	}

	/**
	 * Specify whether the entire accordion should be disabled.
	 * When `true`, all items are disabled regardless of their own `disabled` input.
	 * When `false`, each item uses its own `disabled` binding again.
	 */
	@Input()
	set disabled(value: boolean) {
		this._disabled = value;
		this.updateChildren();
	}

	get disabled(): boolean {
		return this._disabled;
	}

	ngAfterContentInit() {
		this.updateChildren();
	}

	protected updateChildren() {
		if (this.children) {
			this.children.toArray().forEach(child => {
				child.skeleton = this.skeleton;
				child.setParentDisabled(this.disabled);
				if (this.disabled) {
					child.expanded = false;
				}
			});
		}
	}
}
