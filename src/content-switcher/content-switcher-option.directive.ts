import {
	Directive,
	HostBinding,
	Input,
	HostListener,
	Output,
	EventEmitter,
	ElementRef,
	OnInit,
	Renderer2
} from "@angular/core";

@Directive({
	selector: "[cdsContentOption], [ibmContentOption]"
})
export class ContentSwitcherOption implements OnInit {
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

	@HostBinding("class") switcherClass = "cds--content-switcher-btn";
	@HostBinding("class.cds--content-switcher--selected") selectedClass = false;
	@HostBinding("attr.role") role = "tab";
	@HostBinding("attr.aria-selected") ariaSelected = false;
	@HostBinding("attr.tabIndex") tabindex = "-1";

	protected _active = false;

	constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

	@HostListener("click", ["$event"])
	hostClick(event: MouseEvent) {
		this.onClick.emit(event);
		// skip setting and emitting if the option is already active
		if (this.active) { return; }
		this.active = true;
		this.selected.emit(true);
	}

	@HostListener("focus", ["$event"])
	doFocus(event: FocusEvent) {
		this.onFocus.emit(event);
		// skip setting and emitting if the option is already active
		if (this.active) { return; }
		this.active = true;
		this.selected.emit(true);
	}

	/*
	* encapsulating the content in a span with cds--content-switcher__label class
	* to mimic what is done in the react version
	*/
	ngOnInit(): void {
		const hostNativeElement = (this.hostElement.nativeElement as HTMLElement);
		const spanWrapper = this.renderer.createElement("span");
		this.renderer.addClass(spanWrapper, "cds--content-switcher__label");
		const hostChildren: ChildNode[] = [];
		hostNativeElement.childNodes.forEach(node => hostChildren.push(node));
		hostChildren.forEach(node => {
			this.renderer.removeChild(hostNativeElement, node);
			this.renderer.appendChild(spanWrapper, node);
		});
		this.renderer.appendChild(hostNativeElement, spanWrapper);
	}
}
