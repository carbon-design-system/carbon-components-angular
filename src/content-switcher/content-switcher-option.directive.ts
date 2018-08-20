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
	@Input() set active (value: boolean) {
		this._active = value;
		this.selectedClass = value;
		this.ariaSelected = value;
	}

	get active() {
		return this._active;
	}

	@Input() name = "option";

	@Output() selected = new EventEmitter();

	@HostBinding("class") switcherClass = "bx--content-switcher-btn";
	@HostBinding("class.bx--content-switcher--selected") selectedClass = false;
	@HostBinding("attr.role") role = "tab";
	@HostBinding("attr.aria-selected") ariaSelected = false;

	protected _active = false;

	@HostListener("click")
	hostClick() {
		this.active = true;
		this.selected.emit(true);
	}
}
