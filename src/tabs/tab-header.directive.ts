import {
	Directive,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	AfterViewInit,
	HostBinding,
	HostListener,
	TemplateRef,
	forwardRef
} from "@angular/core";

import { Tab } from "./tab.component";

/**
 * Shared inputs, outputs, and selection logic for `[cdsTabHeader]`
 * and `cds-tab-header` as we prepare for deprecation.
 * Groups use `@ContentChildren(TabHeaderBase)` so both forms appear in DOM order,
 * subclasses supply the template and host behavior.
 */
@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix -- abstract base class, not a directive instance
export abstract class TabHeaderBase {
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

	get cacheActive() {
		return this._cacheActive;
	}

	/**
	 * Sets `tabIndex` on the linked `Tab` pane when the pane reference is set.
	 */
	@Input() set paneTabIndex(tabIndex: number | null) {
		if (this.paneReference) {
			this.paneReference.tabIndex = tabIndex;
		}
	}

	/**
	 * Selected tab; controls whether the linked pane content is shown.
	 */
	@Input() active = false;

	/**
	 * Indicates whether or not the `Tab` item is disabled.
	 */
	@Input() disabled = false;

	/**
	 * Icon template; used with `cds-tab-header` / `cds-tab-header-group`.
	 */
	@Input() icon: TemplateRef<any>;

	/**
	 * Optional secondary label rendered below the primary tab label.
	 * Only displayed when the parent group is using `type="contained"`.
	 */
	@Input() secondaryLabel: string;

	/**
	 * Set to `true` to render this tab header as dismissable.
	 */
	@Input() dismissable = false;

	/**
	 * Reference to the corresponding tab pane.
	 */
	@Input() paneReference: Tab;

	/**
	 * Title attribute used as the tooltip for the tab item. Falls back to the tab item's text content if not provided.
	 */
	@Input() title: string;

	/**
	 * Emits when this header becomes selected.
	 */
	@Output() selected = new EventEmitter<any>();

	/**
	 * Emits when this tabs's close button is pressed.
	 */
	@Output() tabClose = new EventEmitter<void>();

	protected _cacheActive = false;

	/**
	 * Move keyboard focus to the tab item.
	 */
	abstract focus(): void;

	/**
	 * Activates the linked pane and emits `selected`.
	 */
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
}

/**
 * Tab header as an attribute on a focusable host inside `cds-tab-header-group`.
 *
 * @deprecated as of v5.
 * Prefer `cds-tab-header` for icons, secondary labels, dismissable close, and icon-only tabs.
 */
@Directive({
	selector: "[cdsTabHeader], [ibmTabHeader]",
	providers: [
		// tslint:disable-next-line:no-forward-ref
		{ provide: TabHeaderBase, useExisting: forwardRef(() => TabHeader) }
	]
})
export class TabHeader extends TabHeaderBase implements AfterViewInit {
	@HostBinding("attr.tabIndex") get tabIndex() {
		return this.active ? 0 : -1;
	}

	@HostBinding("class.cds--tabs__nav-item--selected") get isSelected() {
		return this.active;
	}

	@HostBinding("class.cds--tabs__nav-item--disabled") get isDisabled() {
		return this.disabled;
	}

	@HostBinding("attr.type") type = "button";
	@HostBinding("attr.aria-selected") get ariaSelected() {
		return this.active;
	}
	@HostBinding("attr.aria-disabled") get ariaDisabled() {
		return this.disabled;
	}
	@HostBinding("class.cds--tabs__nav-item") navItem = true;
	@HostBinding("class.cds--tabs__nav-link") navLink = true;
	@HostBinding("attr.title") get hostTitle() {
		return this.title ?? null;
	}

	constructor(private host: ElementRef) {
		super();
	}

	@HostListener("click")
	onClick() {
		this.selectTab();
	}

	@HostListener("keydown", ["$event"])
	onKeyDown(event: KeyboardEvent) {
		if (this.dismissable && event.key === "Delete") {
			event.stopPropagation();
			this.tabClose.emit();
		}
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.title = this.title ? this.title : this.host.nativeElement.textContent;
		});
	}

	focus() {
		this.host.nativeElement.focus();
	}
}
