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
	@Output() selected = new EventEmitter<boolean>();

	@Output() onClick = new EventEmitter<MouseEvent>();

	@Output() onFocus = new EventEmitter<FocusEvent>();

	@HostBinding("class") switcherClass = "bx--content-switcher-btn";
	@HostBinding("class.bx--content-switcher--selected") selectedClass = false;
	@HostBinding("attr.role") role = "tab";
	@HostBinding("attr.aria-selected") ariaSelected = false;
	@HostBinding("attr.tabIndex") tabindex = "-1";

	protected _active = false;

	@HostListener("click")
	hostClick(event: MouseEvent) {
		this.onClick.emit(event);
		// skip setting and emitting if the option is already active
		if (this.active) { return; }
		this.active = true;
		this.selected.emit(true);
	}

	@HostListener("focus")
	doFocus(event: FocusEvent) {
		this.onFocus.emit(event);
		// skip setting and emitting if the option is already active
		if (this.active) { return; }
		this.active = true;
		this.selected.emit(true);
	}
}
