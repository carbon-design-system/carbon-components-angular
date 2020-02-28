import {
	Component,
	Input,
	HostBinding,
	Output,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "ibm-accordion-item",
	template: `
		<button
			[attr.aria-expanded]="expanded"
			[attr.aria-controls]="id"
			(click)="toggleExpanded()"
			class="bx--accordion__heading">
			<ibm-icon-chevron-right16 class="bx--accordion__arrow"></ibm-icon-chevron-right16>
			<p
				class="bx--accordion__title"
				[ngClass]="{
					'bx--skeleton__text': skeleton
				}">
				{{!skeleton ? title : null}}
			</p>
		</button>
		<div [id]="id" class="bx--accordion__content">
			<ng-content *ngIf="!skeleton; else skeletonTemplate"></ng-content>
			<ng-template #skeletonTemplate>
				<p class="bx--skeleton__text" style="width: 90%"></p>
				<p class="bx--skeleton__text" style="width: 80%"></p>
				<p class="bx--skeleton__text" style="width: 95%"></p>
			</ng-template>
		</div>
	`
})
export class AccordionItem {
	static accordionItemCount = 0;
	/**
	 * The title content
	 */
	@Input() title = `Title ${AccordionItem.accordionItemCount}`;
	/**
	 * The id of the accordion item. Defaults to an auto-generated value
	 */
	@Input() id = `accordion-item-${AccordionItem.accordionItemCount}`;
	/**
	 * Enables or disables the skeleton state
	 *
	 * Note: boolean properties should be set using the `[skeleton]="true"` syntax.
	 * `skeleton="true"` will assign a string value of `"true"`
	 */
	@Input() skeleton = false;
	/**
	 * Emits when the item is selected
	 */
	@Output() selected = new EventEmitter();

	@HostBinding("class.bx--accordion__item") itemClass = true;
	/**
	 * Expands or collapses the accordion item
	 *
	 * Note: boolean properties should be set using the `[expanded]="true"` syntax.
	 * `expanded="true"` will assign a string value of `"true"`
	 */
	@HostBinding("class.bx--accordion__item--active") @Input() expanded = false;
	@HostBinding("style.display") itemType = "list-item";
	@HostBinding("attr.role") role = "heading";
	@HostBinding("attr.aria-level") @Input() ariaLevel = 3;

	constructor() {
		AccordionItem.accordionItemCount++;
	}

	public toggleExpanded() {
		if (!this.skeleton) {
			this.expanded = !this.expanded;
			this.selected.emit({id: this.id, expanded: this.expanded});
		}
	}
}
