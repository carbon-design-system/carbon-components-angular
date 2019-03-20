import {
	HostBinding,
	Component,
	Input,
	ElementRef,
	Output,
	EventEmitter,
	AfterViewInit
} from "@angular/core";

/**
 * `OverflowMenuOption` represents a single option in an overflow menu
 *
 * Presently it has three possible states - normal, disabled, and danger:
 * ```
 * <ibm-overflow-menu-option>Simple option</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
 * ```
 *
 * For content that expands beyond the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
@Component({
	selector: "ibm-overflow-menu-option",
	template: `
		<button
			class="bx--overflow-menu-options__btn"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="tabIndex = 0"
			(blur)="tabIndex = -1"
			(click)="onClick($event)"
			[disabled]="disabled"
			[attr.title]="title">
			<ng-content></ng-content>
		</button>
	`
})
export class OverflowMenuOption implements AfterViewInit {
	@HostBinding("class") optionClass = "bx--overflow-menu-options__option";
	@HostBinding("attr.role") role = "presentation";

	@HostBinding("class.bx--overflow-menu-options__option--danger")
	public get isDanger(): Boolean {
		return this.type === "danger";
	}

	@HostBinding("class.bx--overflow-menu-options__option--disabled")
	public get isDisabled(): Boolean {
		return this.disabled;
	}
	/**
	 * toggles between `normal` and `danger` states
	 */
	@Input() type: "normal" | "danger" = "normal";
	/**
	 * disable/enable interactions
	 */
	@Input() disabled = false;

	@Output() selected: EventEmitter<any> = new EventEmitter();

	public tabIndex = -1;
	// note: title must be a real attribute (i.e. not a getter) as of Angular@6 due to
	// change after checked errors
	public title = null;

	constructor(protected elementRef: ElementRef) {}

	onClick(event) {
		this.selected.emit();
	}

	ngAfterViewInit() {
		const button = this.elementRef.nativeElement.querySelector("button");
		if (button.scrollWidth > button.offsetWidth) {
			this.title = this.elementRef.nativeElement.querySelector("button").textContent;
		}
	}
}
