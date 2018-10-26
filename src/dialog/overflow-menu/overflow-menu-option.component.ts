import {
	HostBinding,
	Component,
	Input,
	ElementRef
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
			role="menuitem"
			tabindex="-1"
			(focus)="onFocus()"
			(blur)="onBlur()"
			[disabled]="disabled"
			[title]="(titleEnabled ? content : '')">
			<ng-content></ng-content>
		</button>
	`
})
export class OverflowMenuOption {
	@HostBinding("class") optionClass = "bx--overflow-menu-options__option";
	@HostBinding("attr.role") role = "none";

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

	constructor(private elementRef: ElementRef) {}

	/**
	 * Returns true if the content string is longer than the width of the containing button
	 *
	 * note: getter ties into the view check cycle so we always get an accurate value
	 */
	get titleEnabled() {
		const button = this.elementRef.nativeElement.querySelector("button");
		if (button.scrollWidth > button.offsetWidth) {
			return true;
		}
		return false;
	}

	/**
	 * Returns the text content projected into the component
	 */
	get content(): string {
		return this.elementRef.nativeElement.querySelector("button").textContent;
	}

	onFocus() {
		this.elementRef.nativeElement.querySelector("button").tabIndex = "0";
	}

	onBlur() {
		this.elementRef.nativeElement.querySelector("button").tabIndex = "-1";
	}
}
