import {
	Component,
	Output,
	EventEmitter,
	HostBinding,
	ContentChild,
	TemplateRef,
	Input,
	ViewChild,
	ElementRef
} from "@angular/core";
import { Tag } from "./tag.component";

@Component({
	selector: "ibm-tag-filter",
	template: `
		<span #label class="bx--tag__label" [title]="label.innerHTML">
			<ng-content></ng-content>
		</span>
		<button
			class="bx--tag__close-icon"
			(click)="close.emit()"
			[disabled]="disabled"
			[attr.aria-labelledby]="id || tagId"
			[title]="title">
			<span class="bx--visually-hidden">{{title}}</span>
			<svg ibmIconClose size="16"></svg>
		</button>
	`
})
export class TagFilter extends Tag {
	static tagFilterCount = 0;
	@Input() tagId = `tag-filter-${TagFilter.tagFilterCount}`;
	@Input() title = "Clear Filter";
	@Input() id: string;
	@Input() disabled: boolean;

	/**
	 * Function for close/delete the tag
	 */
	@Output() close = new EventEmitter<any>();

	@ViewChild("label") label: ElementRef;

	@HostBinding("attr.class") get attrClass() {
		return `bx--tag bx--tag--filter bx--tag--${this.type} ${this.class}`;
	}

	@HostBinding("attr.id") get attrId() {
		return this.id ? this.id : this.tagId;
	}

	@HostBinding("attr.aria-label") get attrAriaLabel() {
		const label = this.label.nativeElement.innerHTML;
		return `${this.title} ${label}`;
	}

	constructor() {
		super();
		TagFilter.tagFilterCount++;
	}
}
