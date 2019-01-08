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
			<svg
				class="bx--accordion__arrow"
				width="7"
				height="12"
				viewBox="0 0 7 12">
          		<path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z"/>
			</svg>
			<p *ngIf="skeleton" class="bx--skeleton__text bx--accordion__title"></p>
			<p *ngIf="!skeleton" class="bx--accordion__title">{{title}}</p>
		</button>
		<div [id]="id" class="bx--accordion__content">
			<ng-content *ngIf="!skeleton; else skeletonTemp"></ng-content>
			<ng-template #skeletonTemp>
				<p class="bx--skeleton__text" style="width: 90%"></p>
				<p class="bx--skeleton__text" style="width: 80%"></p>
				<p class="bx--skeleton__text" style="width: 95%"></p>
			</ng-template>
		</div>
	`
})
export class AccordionItem {
	static accordionItemCount = 0;
	@Input() title = `Title ${AccordionItem.accordionItemCount}`;
	@Input() id = `accordion-item-${AccordionItem.accordionItemCount}`;
	@Input() skeleton = false;
	@Output() selected = new EventEmitter();

	@HostBinding("class.bx--accordion__item") itemClass = true;
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
