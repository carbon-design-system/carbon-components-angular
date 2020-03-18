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
 * Available HTML anchor targets
 */
enum Target {
	_self = "_self",
	_blank = "_blank",
	_parent = "_parent",
	_top = "_top"
}
/**
 * Security HTML anchor rel when target is set
 */
const REL = "noreferrer noopener";

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
			*ngIf="!href"
			class="bx--overflow-menu-options__btn"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[disabled]="disabled"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</button>

		<a
			*ngIf="href"
			class="bx--overflow-menu-options__btn"
			role="menuitem"
			[tabindex]="tabIndex"
			(focus)="onFocus()"
			(blur)="onBlur()"
			(click)="onClick()"
			[attr.disabled]="disabled"
			[href]="href"
			[attr.target]="target"
			[attr.rel]="rel"
			[attr.title]="title">
			<ng-container *ngTemplateOutlet="tempOutlet"></ng-container>
		</a>

		<ng-template #tempOutlet>
			<div class="bx--overflow-menu-options__option-content">
				<ng-content></ng-content>
			</div>
		</ng-template>
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
	/**
	 * If it's an anchor, this is its location
	 */
	@Input() href: string;
	/**
	 * Allows to add a target to the anchor
	 */
	@Input() set target(value: Target) {
		if (!Object.keys(Target).includes(value)) {
			return;
		}

		this._target = value;
	}

	get target() {
		return this._target;
	}
	/**
	 * rel only returns its value if target is defined
	 */
	get rel() {
		return this._target ? REL : null;
	}

	@Output() selected: EventEmitter<any> = new EventEmitter();

	public tabIndex = -1;
	// note: title must be a real attribute (i.e. not a getter) as of Angular@6 due to
	// change after checked errors
	public title = null;

	protected _target: Target;

	constructor(protected elementRef: ElementRef) {}

	onClick() {
		this.selected.emit();
	}

	onFocus() {
		setTimeout(() => this.tabIndex = 0);
	}

	onBlur() {
		setTimeout(() => this.tabIndex = -1);
	}

	ngAfterViewInit() {
		const button = this.elementRef.nativeElement.querySelector("button, a");
		if (button.scrollWidth > button.offsetWidth) {
			this.title = button.textContent;
		}
	}
}
