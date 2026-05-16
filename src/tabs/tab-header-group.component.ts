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
	Renderer2,
	inject
} from "@angular/core";

import { Subscription } from "rxjs";
import { EventService } from "carbon-components-angular/utils";
import { I18n } from "carbon-components-angular/i18n";

import { TabHeaderBase } from "./tab-header.directive";
import { BaseTabHeader } from "./base-tab-header.component";
import { NgClass, NgTemplateOutlet } from "@angular/common";

@Component({
	selector: "cds-tab-header-group, ibm-tab-header-group",
	template: `
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--previous"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="leftOverflowNavButtonHidden"
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
			[attr.aria-label]="ariaLabel || translations.HEADER_ARIA_LABEL"
			[attr.aria-labelledby]="ariaLabelledby || null"
			(scroll)="handleScroll()"
			#tabList>
			<ng-container [ngTemplateOutlet]="contentBefore" />
			<ng-content />
			<ng-container [ngTemplateOutlet]="contentAfter" />
		</div>
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--next"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="rightOverflowNavButtonHidden"
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
	`,
	providers: [EventService],
	imports: [NgClass, NgTemplateOutlet]
})
export class TabHeaderGroup extends BaseTabHeader implements AfterContentInit, OnChanges, OnInit, OnDestroy {
	public i18n = inject(I18n);

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

	protected elementRef: ElementRef;
	protected changeDetectorRef: ChangeDetectorRef;
	protected eventService: EventService;
	protected renderer: Renderer2;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
		const elementRef = inject(ElementRef);
		const changeDetectorRef = inject(ChangeDetectorRef);
		const eventService = inject(EventService);
		const renderer = inject(Renderer2);

		super(elementRef, changeDetectorRef, eventService, renderer);

		this.elementRef = elementRef;
		this.changeDetectorRef = changeDetectorRef;
		this.eventService = eventService;
		this.renderer = renderer;
	}

	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		const tabHeadersArray = this.tabHeaderQuery.toArray();

		if (event.key === "ArrowRight") {
			if (this.currentSelectedTab < tabHeadersArray.length - 1) {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[this.currentSelectedTab + 1].disabled) {
					tabHeadersArray[this.currentSelectedTab + 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedTab + 1].focus();
					this.currentSelectedTab++;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[0].disabled) {
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
				if (this.followFocus && !tabHeadersArray[this.currentSelectedTab - 1].disabled) {
					tabHeadersArray[this.currentSelectedTab - 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedTab - 1].focus();
					this.currentSelectedTab--;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
					tabHeadersArray[tabHeadersArray.length - 1].selectTab();
				} else {
					tabHeadersArray[tabHeadersArray.length - 1].focus();
					this.currentSelectedTab = tabHeadersArray.length - 1;
				}
			}
		}

		if (event.key === "Home") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[0].disabled) {
				tabHeadersArray[0].selectTab();
			} else {
				tabHeadersArray[0].focus();
				this.currentSelectedTab = 0;
			}
		}

		if (event.key === "End") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
				tabHeadersArray[tabHeadersArray.length - 1].selectTab();
			} else {
				tabHeadersArray[tabHeadersArray.length - 1].focus();
				this.currentSelectedTab = tabHeadersArray.length - 1;
			}
		}

		if ((event.key === " ") && !this.followFocus) {
			tabHeadersArray[this.currentSelectedTab].selectTab();
		}
	}

	ngOnInit() {
		this.eventService.on(window as any, "resize", () => this.handleScroll());
	}

	ngAfterContentInit() {
		// Reallocate trackers because subscriptions are permanently closed after unsubscribe
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

		this.setFirstTab();
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

	/**
	 * Determines which `Tab` is initially selected.
	 */
	protected setFirstTab() {
		setTimeout(() => {
			const headers = this.tabHeaderQuery.toArray();
			let selectedHeader = headers.find(h => h.active || h.paneReference?.active);
			if (!selectedHeader && headers.length > 0) {
				selectedHeader = headers[0];
			}
			if (selectedHeader) {
				selectedHeader.selectTab();
				this.activeIndex = this.currentSelectedTab;
				this.changeDetectorRef.markForCheck();
			}
		});
	}
}
