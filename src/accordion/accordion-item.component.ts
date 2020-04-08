import {
	Component,
	Input,
	HostBinding,
	Output,
	TemplateRef,
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
			<p *ngIf="!isTemplate(title)"
				class="bx--accordion__title"
				[ngClass]="{
					'bx--skeleton__text': skeleton
				}">
				{{!skeleton ? title : null}}
			</p>
			<ng-template
				*ngIf="isTemplate(title)"
				[ngTemplateOutlet]="title"
				[ngTemplateOutletContext]="context">
			</ng-template>
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
	@Input() title: string | TemplateRef<any>;
	@Input() context: Object | null = null;
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

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
