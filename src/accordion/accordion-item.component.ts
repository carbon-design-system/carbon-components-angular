import { Component, Input, HostBinding, Host, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "ibm-accordion-item",
	template: `
		<button
			[attr.aria-expanded]="expanded"
			[attr.aria-controls]="id"
			(click)="toggleExpanded()"
			class="bx--accordion__heading">
			<svg
				class="bx--accordion__arrow"
				width="7"
				height="12"
				viewBox="0 0 7 12">
          		<path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z"/>
			</svg>
			 <p class="bx--accordion__title">{{title}}</p>
		</button>
		<div [id]="id" class="bx--accordion__content">
			<ng-content></ng-content>
		</div>
	`
})
export class AccordionItem {
	static accodionItemCount = 0;
	@Input() title = `Title ${AccordionItem.accodionItemCount}`;
	@HostBinding("class.bx--accordion__item--active") @Input() expanded = false;
	@Input() id = `accordion-item-${AccordionItem.accodionItemCount}`;
	@Output() selected = new EventEmitter();

	@HostBinding("class") itemClass = "bx--accordion__item";
	@HostBinding("style.display") @HostBinding("attr.role") itemType = "list-item";

	constructor() {
		AccordionItem.accodionItemCount++;
	}

	public toggleExpanded() {
		this.expanded = !this.expanded;
		this.selected.emit({id: this.id, expanded: this.expanded});
	}
}
