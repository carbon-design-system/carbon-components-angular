import {
	HostBinding,
	Component,
	Input,
	ElementRef,
	AfterViewInit,
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
 * For content that expands beyod the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
@Component({
	selector: "ibm-overflow-menu-option",
	template: `
		<button
			class="bx--overflow-menu-options__btn"
			[ngClass]="{
				'bx--overflow-menu-options__option--danger': type === 'danger',
				'bx--overflow-menu-options__option--disabled': disabled
			}"
			[tabindex]="(disabled?-1:null)"
			[title]="(titleEnabled?getContent():'')">
			<ng-content></ng-content>
		</button>
	`
})
export class OverflowMenuOption implements AfterViewInit {
	@HostBinding("class") optionClass = "bx--overflow-menu-options__option";
	@HostBinding("attr.role") role = "list-item";

	/**
	 * toggles between `normal` and `danger` states
	 */
	@Input() type: "normal" | "danger" = "normal";
	/**
	 * disable/enable interactions
	 */
	@Input() disabled = false;

	public titleEnabled = false;

	constructor(private elementRef: ElementRef) {}

	ngAfterViewInit() {
		const button = this.elementRef.nativeElement.querySelector("button");
		if (button.scrollWidth > button.offsetWidth) {
			this.titleEnabled = true;
		}
	}

	/**
	 * Returns the text content projected into the component
	 */
	getContent(): string {
		return this.elementRef.nativeElement.querySelector("button").textContent;
	}
}
