import {
	Component,
	Input,
	HostBinding,
	Output,
	TemplateRef,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "cds-accordion-item, ibm-accordion-item",
	template: `
		<button
			type="button"
			[disabled]="disabled"
			[attr.aria-expanded]="expanded"
			[attr.aria-controls]="id"
			(click)="toggleExpanded()"
			class="cds--accordion__heading">
			<svg cdsIcon="chevron--right" size="16" class="cds--accordion__arrow"></svg>
			<p *ngIf="!isTemplate(title)"
				class="cds--accordion__title"
				[ngClass]="{
					'cds--skeleton__text': skeleton
				}">
				{{!skeleton ? title : null}}
			</p>
			<ng-template
				*ngIf="isTemplate(title)"
				[ngTemplateOutlet]="title"
				[ngTemplateOutletContext]="context">
			</ng-template>
		</button>
		<div [id]="id" class="cds--accordion__content">
			<ng-content *ngIf="!skeleton; else skeletonTemplate"></ng-content>
			<ng-template #skeletonTemplate>
				<p class="cds--skeleton__text" style="width: 90%"></p>
				<p class="cds--skeleton__text" style="width: 80%"></p>
				<p class="cds--skeleton__text" style="width: 95%"></p>
			</ng-template>
		</div>
	`,
	styles: [`
		:host {
			display: list-item;
		}
	`]
})
export class AccordionItem {
	static accordionItemCount = 0;
	@Input() title: string | TemplateRef<any>;
	@Input() context: Object | null = null;
	@Input() id = `accordion-item-${AccordionItem.accordionItemCount++}`;
	@Input() skeleton = false;
	@Output() selected = new EventEmitter();

	@HostBinding("class.cds--accordion__item") itemClass = true;
	@HostBinding("class.cds--accordion__item--active") @Input() expanded = false;
	@HostBinding("class.cds--accordion__item--disabled") @Input() disabled = false;
	@HostBinding("attr.role") role = "listitem";

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
