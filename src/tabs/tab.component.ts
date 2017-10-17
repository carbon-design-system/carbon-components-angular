import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ContentChild,
	TemplateRef,
	HostBinding
} from "@angular/core";

let nextId = 0;

@Component({
	selector: "n-tab",
	template: `
		<div
			role="tabpanel"
			class="tabs-panel"
			*ngIf="shouldRender()"
			[ngStyle]="{'display': active ? null : 'none'}"
			[attr.aria-labelledby]="id + '-header'">
			<ng-content></ng-content>
		</div>
	 `
})
export class Tab implements OnInit {
	public headingIsTemplate = false;
	@Input() heading: string | TemplateRef<any>;
	@Input() active = false;
	@Input() disabled = false;
	// do we need id's?
	@Input() id = `n-tab-${nextId++}`;
	@Input() cacheActive = false;
	@Output() select: EventEmitter<void> = new EventEmitter<void>();
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();

	@HostBinding("attr.id") attrClass = this.id;

	ngOnInit() {
		if (this.heading instanceof TemplateRef) {
			this.headingIsTemplate = true;
		}
	}

	doSelect() {
		this.select.emit();
		this.selected.emit();
	}

	shouldRender() {
		return this.active || this.cacheActive;
	}
}
