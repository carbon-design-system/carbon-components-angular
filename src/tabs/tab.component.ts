import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ContentChild,
	TemplateRef
} from "@angular/core";

let nextId = 0;

@Component({
	selector: "n-tab",
	template: `
		<div
			role="tabpanel"
			*ngIf="shouldRender()"
			[ngClass]="{hide: !active}"
			[attr.aria-labelledby]="id + '-header'">
			<ng-content></ng-content>
		</div>
	 `,
	host: {
		"[attr.id]": "id"
	}
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
