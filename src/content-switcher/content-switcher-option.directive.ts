import {
	Directive,
	HostBinding,
	Input,
	HostListener,
	Output,
	EventEmitter
} from "@angular/core";

@Directive({
	selector: "[ibmContentOption]"
})
export class ContentSwitcherOption {
	/**
	 * Used to activate the option. Only one option may be `active` at a time
	 */
	@Input() set active (value: boolean) {
		this._active = value;
		this.selectedClass = value;
		this.ariaSelected = value;
		this.tabindex = value ? "0" : "-1";
	}

	get active() {
		return this._active;
	}

	/**
	 * Internal name for the option.
	 * Should be something that identifies the option to the application.
	 * Accessible from the `ContentSwitcher` `selected` emitter
	 */
	@Input() name = "option";

	/**
	 * Emits when the option is selected.
	 */
	@Output() selected = new EventEmitter();

	@HostBinding("class") switcherClass = "bx--content-switcher-btn";
	@HostBinding("class.bx--content-switcher--selected") selectedClass = false;
	@HostBinding("attr.role") role = "tab";
	@HostBinding("attr.aria-selected") ariaSelected = false;
	@HostBinding("attr.tabIndex") tabindex = "-1";

	protected _active = false;

	@HostListener("click")
	hostClick() {
		this.active = true;
		this.selected.emit(true);
	}

	@HostListener("focus")
	onFocus() {
		this.active = true;
	}

	@HostListener("blur", ["$event"])
	onBlur(event) {
		if (event.relatedTarget) {
			this.active = false;
		}
	}
}
