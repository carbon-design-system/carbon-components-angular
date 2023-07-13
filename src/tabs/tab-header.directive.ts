import {
	Directive,
	Input,
	ElementRef,
	EventEmitter,
	Output,
	AfterViewInit,
	HostBinding,
	HostListener
} from "@angular/core";

import { Tab } from "./tab.component";

@Directive({
	selector: "[cdsTabHeader], [ibmTabHeader]"
})
export class TabHeader implements AfterViewInit {
	@HostBinding("attr.tabIndex") get tabIndex() {
		return this.active ? 0 : -1;
	}

	@HostBinding("class.cds--tabs__nav-item--selected") get isSelected() {
		return this.active;
	}

	@HostBinding("class.cds--tabs__nav-item--disabled") get isDisabled() {
		return this.disabled;
	}
	/**
	 * Set to 'true' to have pane reference cached and not reloaded on tab switching.
	 */
	@Input() set cacheActive(shouldCache: boolean) {
		this._cacheActive = shouldCache;

		// Updates the pane references associated with the tab header when cache active is changed.
		if (this.paneReference) {
			this.paneReference.cacheActive = this.cacheActive;
		}
	}

	@Input() set paneTabIndex(tabIndex: number | null) {
		if (this.paneReference) {
			this.paneReference.tabIndex = tabIndex;
		}
	}

	get cacheActive() {
		return this._cacheActive;
	}
	/**
	 * Indicates whether the `Tab` is active/selected.
	 * Determines whether it's `TabPanel` is rendered.
	 */
	@Input() active = false;
	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 */
	@Input() disabled = false;

	@HostBinding("attr.type") type = "button";
	@HostBinding("attr.aria-selected") ariaSelected = this.active;
	@HostBinding("attr.aria-disabled") ariaDisabled = this.disabled;
	@HostBinding("class.cds--tabs__nav-item") navItem = true;
	@HostBinding("class.cds--tabs__nav-link") navLink = true;

	/**
	 * Reference to the corresponsing tab pane.
	 */
	@Input() paneReference: Tab;
	@HostBinding("attr.title") @Input() title;

	/**
	 * Value 'selected' to be emitted after a new `Tab` is selected.
	 */

	@Output() selected = new EventEmitter<any>();

	protected _cacheActive = false;

	constructor(private host: ElementRef) {}

	@HostListener("click")
	onClick() {
		this.selectTab();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.title = this.title ? this.title : this.host.nativeElement.textContent;
		});
	}

	selectTab() {
		this.focus();
		if (!this.disabled) {
			this.selected.emit();
			this.active = true;
			if (this.paneReference) {
				this.paneReference.active = true;
			}
		}
	}

	focus() {
		this.host.nativeElement.focus();
	}
}
