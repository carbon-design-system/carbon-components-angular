import {
	Component,
	QueryList,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	HostListener,
	ContentChildren,
	AfterContentInit,
	ElementRef,
	OnChanges,
	SimpleChanges,
	ChangeDetectorRef,
	ViewChild,
	OnInit,
	OnDestroy,
	Renderer2
} from "@angular/core";

import { Subscription } from "rxjs";
import { EventService } from "carbon-components-angular/utils";
import { I18n } from "carbon-components-angular/i18n";

import { TabHeaderBase } from "./tab-header.directive";
import { BaseTabHeader } from "./base-tab-header.component";

@Component({
	selector: "cds-tab-header-group, ibm-tab-header-group",
	template: `
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--previous"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="true"
			[attr.tabindex]="-1"
			[attr.aria-label]="translations.BUTTON_ARIA_LEFT"
			[attr.title]="translations.BUTTON_ARIA_LEFT"
			(click)="handleOverflowNavClick(-1, tabHeaderQuery.length)"
			(pointerdown)="handleOverflowNavMouseDown(-1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			(pointercancel)="handleOverflowNavMouseUp()">
			<svg
				focusable="false"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				aria-hidden="true">
				<path d="M5 8L10 3 10.7 3.7 6.4 8 10.7 12.3 10 13z"></path>
			</svg>
		</button>
		<div
			class="cds--tab--list"
			role="tablist"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby || null"
			(scroll)="handleScroll()"
			#tabList>
			<ng-container [ngTemplateOutlet]="contentBefore"></ng-container>
			<ng-content></ng-content>
			<ng-container [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--next"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="true"
			[attr.tabindex]="-1"
			[attr.aria-label]="translations.BUTTON_ARIA_RIGHT"
			[attr.title]="translations.BUTTON_ARIA_RIGHT"
			(click)="handleOverflowNavClick(1, tabHeaderQuery.length)"
			(pointerdown)="handleOverflowNavMouseDown(1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			(pointercancel)="handleOverflowNavMouseUp()">
			<svg
				focusable="false"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				aria-hidden="true">
				<path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
			</svg>
		</button>
	`
})
export class TabHeaderGroup extends BaseTabHeader implements AfterContentInit, OnChanges, OnInit, OnDestroy {
	/**
	 * i18n strings for overflow controls and the tab list `aria-label` fallback.
	 */
	@Input() translations = this.i18n.get().TABS;

	/**
	 * When `true`, sets each tab panel `tabindex` to `-1` for navigation-style usage.
	 */
	@Input() isNavigation = false;

	/**
	 * Emits when a tab close control is used (with `dismissable`).
	 * The emitted value is the tab index.
	 */
	@Output() tabClose: EventEmitter<number> = new EventEmitter<number>();

	/**
	 * Projected tab headers (`TabHeaderBase`: directive or `cds-tab-header`).
	 */
	@ContentChildren(TabHeaderBase) tabHeaderQuery: QueryList<TabHeaderBase>;

	@ViewChild("tabList", { static: true }) headerContainer;
	selectedSubscriptionTracker = new Subscription();
	closeSubscriptionTracker = new Subscription();

	/**
	 * Index of the selected tab for keyboard logic.
	 */
	currentSelectedTab = 0;

	/**
	 * Focused tab index when `followFocus` is false (manual activation).
	 */
	activeIndex: number | null = null;

	@HostBinding("class.cds--tabs--full-width") get fullWidthClass() {
		return this.distributeWidth;
	}

	/**
	 * We use taller rows when any header has a secondary label.
	 */
	@HostBinding("class.cds--tabs--tall") get tallClass(): boolean {
		return this.hasSecondaryLabelTabs;
	}

	get hasSecondaryLabelTabs(): boolean {
		if (!this.tabHeaderQuery || this.type !== "contained") {
			return false;
		}
		return this.tabHeaderQuery.toArray().some(
			h =>
				h.secondaryLabel != null &&
				String(h.secondaryLabel).trim() !== ""
		);
	}

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2,
		protected i18n: I18n
	) {
		super(elementRef, changeDetectorRef, eventService, renderer);
		this.translations = this.i18n.get().TABS;
	}

	/**
	 * True when `fullWidth` applies (contained, fewer than 9 headers).
	 */
	get distributeWidth(): boolean {
		return (
			this.fullWidth &&
			this.type === "contained" &&
			(this.tabHeaderQuery ? this.tabHeaderQuery.length < 9 : false)
		);
	}

	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		const tabHeadersArray = this.tabHeaderQuery.toArray();

		if (event.key === "ArrowRight") {
			if (this.currentSelectedTab < tabHeadersArray.length - 1) {
				event.preventDefault();
				if (this.isAutomaticActivation && !tabHeadersArray[this.currentSelectedTab + 1].disabled) {
					tabHeadersArray[this.currentSelectedTab + 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedTab + 1].focus();
					this.currentSelectedTab++;
				}
			} else {
				event.preventDefault();
				if (this.isAutomaticActivation && !tabHeadersArray[0].disabled) {
					tabHeadersArray[0].selectTab();
				} else {
					tabHeadersArray[0].focus();
					this.currentSelectedTab = 0;
				}
			}
		}

		if (event.key === "ArrowLeft") {
			if (this.currentSelectedTab > 0) {
				event.preventDefault();
				if (this.isAutomaticActivation && !tabHeadersArray[this.currentSelectedTab - 1].disabled) {
					tabHeadersArray[this.currentSelectedTab - 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedTab - 1].focus();
					this.currentSelectedTab--;
				}
			} else {
				event.preventDefault();
				if (this.isAutomaticActivation && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
					tabHeadersArray[tabHeadersArray.length - 1].selectTab();
				} else {
					tabHeadersArray[tabHeadersArray.length - 1].focus();
					this.currentSelectedTab = tabHeadersArray.length - 1;
				}
			}
		}

		if (event.key === "Home") {
			event.preventDefault();
			if (this.isAutomaticActivation && !tabHeadersArray[0].disabled) {
				tabHeadersArray[0].selectTab();
			} else {
				tabHeadersArray[0].focus();
				this.currentSelectedTab = 0;
			}
		}

		if (event.key === "End") {
			event.preventDefault();
			if (this.isAutomaticActivation && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
				tabHeadersArray[tabHeadersArray.length - 1].selectTab();
			} else {
				tabHeadersArray[tabHeadersArray.length - 1].focus();
				this.currentSelectedTab = tabHeadersArray.length - 1;
			}
		}

		if ((event.key === " ") && !this.isAutomaticActivation) {
			tabHeadersArray[this.currentSelectedTab].selectTab();
		}
	}

	ngOnInit() {
		this.eventService.on(window as any, "resize", () => this.handleScroll());
	}

	ngAfterContentInit() {
		// IMPORTANT: a `Subscription` becomes permanently `closed` after
		// `unsubscribe()` is called on it. Any subsequent `.add(child)` call
		// tears down the child immediately, so we must allocate fresh
		// trackers here (otherwise none of the per-header subscriptions
		// below would ever fire and tabs would never be deactivated).
		this.selectedSubscriptionTracker.unsubscribe();
		this.closeSubscriptionTracker.unsubscribe();
		this.selectedSubscriptionTracker = new Subscription();
		this.closeSubscriptionTracker = new Subscription();

		if (this.tabHeaderQuery) {
			this.tabHeaderQuery.toArray()
				.forEach(tabHeader => {
					tabHeader.cacheActive = this.cacheActive;
					tabHeader.dismissable = this.dismissable;
					tabHeader.paneTabIndex = this.isNavigation ? null : 0;
				});
		}

		const headersArray = this.tabHeaderQuery.toArray();

		// Set initial selected tab (`active`)
		let initialSelectedIndex = headersArray.findIndex(
			h => h.active || !!(h.paneReference && h.paneReference.active)
		);
		if (initialSelectedIndex < 0) {
			initialSelectedIndex = 0;
		}
		this.currentSelectedTab = initialSelectedIndex;
		this.activeIndex = initialSelectedIndex;

		headersArray.forEach(tabHeader => {
			this.selectedSubscriptionTracker.add(
				tabHeader.selected.subscribe(() => {
					this.currentSelectedTab = this.tabHeaderQuery.toArray().indexOf(tabHeader);
					// The Filter takes the current selected tab out, then all other headers are
					// deactivated and their associated pane references are also deactivated.
					this.tabHeaderQuery.toArray().filter(header => header !== tabHeader)
						.forEach(filteredHeader => {
							filteredHeader.active = false;
							if (filteredHeader.paneReference) {
								filteredHeader.paneReference.active = false;
							}
						});
				})
			);

			this.closeSubscriptionTracker.add(
				tabHeader.tabClose.subscribe(() => {
					const index = this.tabHeaderQuery.toArray().indexOf(tabHeader);
					this.tabClose.emit(index);
				})
			);
		});

		setTimeout(() => this.tabHeaderQuery.toArray()[this.currentSelectedTab].selectTab());
	}

	ngOnDestroy() {
		this.selectedSubscriptionTracker.unsubscribe();
		this.closeSubscriptionTracker.unsubscribe();
		clearTimeout(this.scrollDebounceTimer);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabHeaderQuery) {
			if (changes.cacheActive) {
				this.tabHeaderQuery.toArray().forEach(tabHeader => tabHeader.cacheActive = this.cacheActive);
			}

			if (changes.dismissable) {
				this.tabHeaderQuery.toArray().forEach(tabHeader => tabHeader.dismissable = this.dismissable);
			}

			if (changes.isNavigation) {
				this.tabHeaderQuery.toArray()
					.forEach(tabHeader => tabHeader.paneTabIndex = this.isNavigation ? null : 0);
			}
		}
	}

	getSelectedTab(): any {
		const selected = this.tabHeaderQuery.toArray()[this.currentSelectedTab];
		if (selected) {
			return selected;
		}
		return {
			headingIsTemplate: false,
			heading: ""
		};
	}
}
