import {
	Component,
	QueryList,
	Input,
	Output,
	EventEmitter,
	HostListener,
	HostBinding,
	ViewChild,
	ContentChildren,
	AfterContentInit,
	ViewChildren,
	ElementRef,
	OnChanges,
	SimpleChanges,
	OnDestroy,
	OnInit,
	ChangeDetectorRef,
	Renderer2
} from "@angular/core";
import { EventService } from "carbon-components-angular/utils";
import { I18n } from "carbon-components-angular/i18n";

import { BaseTabHeader } from "./base-tab-header.component";
import { Tab } from "./tab.component";

/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 */
@Component({
	selector: "cds-tab-headers, ibm-tab-headers",
	template: `
		<button
			type="button"
			(click)="handleOverflowNavClick(-1, tabs.length)"
			(pointerdown)="handleOverflowNavMouseDown(-1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--previous"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="leftOverflowNavButtonHidden"
			[attr.tabindex]="-1"
			[attr.aria-label]="translations.BUTTON_ARIA_LEFT"
			[attr.title]="translations.BUTTON_ARIA_LEFT">
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
			#tabList
			class="cds--tab--list"
			role="tablist"
			[attr.aria-label]="ariaLabel || translations.HEADER_ARIA_LABEL"
			[attr.aria-labelledby]="ariaLabelledby || null"
			(scroll)="handleScroll()">
			<ng-container [ngTemplateOutlet]="contentBefore"></ng-container>
			<ng-container *ngFor="let tab of tabs; let i = index;">
				<cds-tooltip
					*ngIf="tab.iconOnly; else inlineTabItem"
					align="bottom"
					[autoAlign]="true"
					class="cds--icon-tooltip"
					[description]="tab.iconLabel"
					[enterDelayMs]="tab.enterDelayMs ?? 100"
					[leaveDelayMs]="tab.leaveDelayMs ?? 300"
					[defaultOpen]="tab.defaultOpen"
					[disabled]="tab.disabled">
					<ng-container *ngTemplateOutlet="tabItemTpl; context: { tab: tab, i: i }"></ng-container>
				</cds-tooltip>
				<ng-template #inlineTabItem>
					<ng-container *ngTemplateOutlet="tabItemTpl; context: { tab: tab, i: i }"></ng-container>
				</ng-template>
				<div
					*ngIf="dismissable"
					class="cds--tabs__nav-item--close">
					<button
						type="button"
						[attr.tabindex]="-1"
						[attr.aria-disabled]="tab.disabled"
						[attr.aria-hidden]="!(tab.active && !tab.disabled)"
						[disabled]="tab.disabled"
						class="cds--tabs__nav-item--close-icon"
						[ngClass]="{
							'cds--tabs__nav-item--close-icon--selected': tab.active,
							'cds--tabs__nav-item--close-icon--disabled': tab.disabled
						}"
						[attr.title]="getCloseTitle(tab)"
						(click)="handleClose($event, tab, i)">
						<svg
							focusable="false"
							preserveAspectRatio="xMidYMid meet"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							width="16"
							height="16"
							viewBox="0 0 32 32"
							[attr.aria-label]="tab.closeButtonAriaLabel"
							[attr.aria-hidden]="!(tab.active && !tab.disabled)">
							<path d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"></path>
						</svg>
					</button>
				</div>
			</ng-container>
			<ng-container [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		<ng-template #tabItemTpl let-tab="tab" let-i="i">
			<button
				#tabItem
				role="tab"
				[attr.aria-selected]="tab.active"
				[attr.tabindex]="(tab.active?0:-1)"
				[attr.aria-controls]="tab.id"
				[attr.aria-disabled]="tab.disabled"
				[attr.aria-label]="tab.iconOnly ? tab.iconLabel : null"
				[disabled]="tab.disabled"
				[ngClass]="{
					'cds--tabs__nav-item--selected': tab.active,
					'cds--tabs__nav-item--disabled': tab.disabled,
					'cds--tabs__nav-item--icon-only': tab.iconOnly,
					'cds--tabs__nav-item--icon-only__20': tab.iconOnly && iconSize === 'lg'
				}"
				class="cds--tabs__nav-item cds--tabs__nav-link"
				type="button"
				draggable="false"
				id="{{tab.id}}-header"
				[attr.title]="tab.iconOnly ? tab.iconLabel : (tab.title || (!tab.headingIsTemplate ? tab.heading : null))"
				(focus)="onTabFocus(tabItem, i)"
				(keydown)="handleTabKeyDown($event, tab, i)"
				(click)="selectTab(tabItem, tab, i)">
				<ng-container *ngIf="tab.iconOnly; else labeledTab">
					<ng-container [ngTemplateOutlet]="tab.icon"></ng-container>
					<span
						*ngIf="!tab.disabled && tab.badgeIndicator"
						class="cds--badge-indicator"
						aria-hidden="true">
					</span>
				</ng-container>
				<ng-template #labeledTab>
					<div class="cds--tabs__nav-item-label-wrapper">
						<div *ngIf="dismissable && tab.icon" class="cds--tabs__nav-item--icon-left">
							<ng-container [ngTemplateOutlet]="tab.icon"></ng-container>
						</div>
						<span class="cds--tabs__nav-item-label">
							<ng-container *ngIf="!tab.headingIsTemplate">
								{{ tab.heading }}
							</ng-container>
							<ng-template
								*ngIf="tab.headingIsTemplate"
								[ngTemplateOutlet]="tab.heading"
								[ngTemplateOutletContext]="{$implicit: tab.context}">
							</ng-template>
						</span>
						<div
							*ngIf="!dismissable && tab.icon"
							class="cds--tabs__nav-item--icon">
							<ng-container [ngTemplateOutlet]="tab.icon"></ng-container>
						</div>
					</div>
					<div
						*ngIf="hasSecondaryLabelTabs && tab.secondaryLabel"
						class="cds--tabs__nav-item-secondary-label"
						[attr.title]="tab.secondaryLabel">
						{{ tab.secondaryLabel }}
					</div>
				</ng-template>
			</button>
		</ng-template>
		<button
			type="button"
			(click)="handleOverflowNavClick(1, tabs.length)"
			(pointerdown)="handleOverflowNavMouseDown(1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--next"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}"
			[attr.aria-hidden]="rightOverflowNavButtonHidden"
			[attr.tabindex]="-1"
			[attr.aria-label]="translations.BUTTON_ARIA_RIGHT"
			[attr.title]="translations.BUTTON_ARIA_RIGHT">
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

export class TabHeaders extends BaseTabHeader implements AfterContentInit, OnChanges, OnDestroy, OnInit {
	/**
	 * List of `Tab` components.
	 */
	// disable the next line because we need to rename the input
	// tslint:disable-next-line
	@Input("tabs") tabInput: QueryList<Tab>;

	/**
	 * i18n strings for overflow controls and the tab list `aria-label` fallback.
	 */
	@Input() translations = this.i18n.get().TABS;

	/**
	 * Emits when a tab close control is used (with `dismissable`).
	 * The emitted value is the tab index.
	 */
	@Output() tabClose: EventEmitter<number> = new EventEmitter<number>();

	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 */
	@ViewChild("tabList", { static: true }) headerContainer: ElementRef<HTMLElement>;
	/**
	 * ContentChild of all the tabs
	 */
	@ContentChildren(Tab) tabQuery: QueryList<Tab>;
	/**
	 * Set to tabQuery if tabInput is empty
	 */
	tabs: QueryList<Tab>;
	/**
	 * The index of the first visible tab.
	 */
	firstVisibleTab = 0;
	/**
	 * The DOM element containing the `Tab` headings displayed.
	 */
	@ViewChildren("tabItem") allTabHeaders: QueryList<ElementRef>;

	/**
	 * Focused tab index when `followFocus` is false (manual activation).
	 */
	activeIndex: number | null = null;

	@HostBinding("class.cds--tabs--tall") get tallClass() {
		return this.hasSecondaryLabelTabs;
	}

	@HostBinding("class.cds--tabs--full-width") get fullWidthClass() {
		return this.distributeWidth;
	}

	private resizeObserver: ResizeObserver;

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2,
		protected i18n: I18n
	) {
		super(elementRef, changeDetectorRef, eventService, renderer);
	}

	get hasSecondaryLabelTabs(): boolean {
		if (!this.tabs || this.type !== "contained") {
			return false;
		}
		return this.tabs.toArray().some(tab => typeof tab.secondaryLabel !== "undefined" && tab.secondaryLabel !== null);
	}

	/**
	 * True when `fullWidth` applies (contained, fewer than 9 tabs).
	 */
	get distributeWidth(): boolean {
		return (
			this.fullWidth &&
			this.type === "contained" &&
			(this.tabs ? this.tabs.length < 9 : false)
		);
	}

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		const tabsArray = this.tabs.toArray();
		const enabledTabs = tabsArray.filter(tab => !tab.disabled);
		if (enabledTabs.length === 0) {
			return;
		}

		const referenceIndex = this.isAutomaticActivation ?
			this.currentSelectedTab :
			(this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab);
		const currentEnabledIndex = Math.max(0, enabledTabs.indexOf(tabsArray[referenceIndex]));

		let nextEnabledIndex = currentEnabledIndex;
		let handled = false;

		if (event.key === "ArrowRight") {
			nextEnabledIndex = (currentEnabledIndex + 1) % enabledTabs.length;
			handled = true;
		} else if (event.key === "ArrowLeft") {
			nextEnabledIndex = (enabledTabs.length + currentEnabledIndex - 1) % enabledTabs.length;
			handled = true;
		} else if (event.key === "Home") {
			nextEnabledIndex = 0;
			handled = true;
		} else if (event.key === "End") {
			nextEnabledIndex = enabledTabs.length - 1;
			handled = true;
		}

		if (handled) {
			event.preventDefault();
			const nextTab = enabledTabs[nextEnabledIndex];
			const nextIndex = tabsArray.indexOf(nextTab);

			if (this.isAutomaticActivation) {
				this.selectTab(this.allTabHeaders.toArray()[nextIndex].nativeElement, nextTab, nextIndex);
			} else {
				this.activeIndex = nextIndex;
			}
			this.allTabHeaders.toArray()[nextIndex].nativeElement.focus();
			return;
		}

		if ((event.key === " " || event.key === "Spacebar") && !this.isAutomaticActivation) {
			const focusIndex = this.activeIndex !== null ? this.activeIndex : this.currentSelectedTab;
			this.selectTab(this.allTabHeaders.toArray()[focusIndex].nativeElement, tabsArray[focusIndex], focusIndex);
		}
	}

	@HostListener("blur", ["$event"])
	handleBlur(event: FocusEvent) {
		const relatedTarget = event.relatedTarget as Node | null;
		const container = this.headerContainer?.nativeElement;
		if (container && relatedTarget && container.contains(relatedTarget)) {
			return;
		}
		// Reset active index to selected tab index when followFocus is false
		if (!this.isAutomaticActivation) {
			this.activeIndex = this.currentSelectedTab;
		}
	}

	/**
	 * `Delete` closes dismissable tabs.
	 */
	handleTabKeyDown(event: KeyboardEvent, tab: Tab, index: number) {
		if (this.dismissable && event.key === "Delete") {
			this.handleClose(event, tab, index);
		}
	}

	ngOnInit(): void {
		// Update scroll on resize
		this.resizeObserver = new ResizeObserver(() => {
			// Need to explicitly trigger change detection since this runs outside Angular zone
			this.changeDetectorRef.detectChanges();
		});
		this.resizeObserver.observe(this.headerContainer.nativeElement);
	}

	ngOnDestroy(): void {
		this.resizeObserver?.unobserve(this.headerContainer.nativeElement);
		clearTimeout(this.scrollDebounceTimer);
	}

	ngAfterContentInit() {
		if (!this.tabInput) {
			this.tabs = this.tabQuery;
		} else {
			this.tabs = this.tabInput;
		}

		this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);
		this.tabs.changes.subscribe(() => {
			this.setFirstTab();
			this.changeDetectorRef.markForCheck();
		});
		this.setFirstTab();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabs && changes.cacheActive) {
			this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);
		}
	}

	/**
	 * Controls manually focusing tabs.
	 */
	onTabFocus(ref: HTMLElement, index: number) {
		if (this.isAutomaticActivation) {
			this.currentSelectedTab = index;
		} else {
			this.activeIndex = index;
		}
		// reset scroll left because we're already handling it
		this.headerContainer.nativeElement.parentElement.scrollLeft = 0;

		if (this.scrollIntoView) {
			this.scrollTabIntoView(this.allTabHeaders.toArray()[index]?.nativeElement);
		}
	}

	getSelectedTab(): any {
		const selected = this.tabs.find(tab => tab.active);
		if (selected) {
			return selected;
		}
		return { headingIsTemplate: false, heading: "" };
	}

	/**
	 * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
	 */
	selectTab(ref: HTMLElement, tab: Tab, tabIndex: number) {
		if (tab.disabled) {
			return;
		}

		this.currentSelectedTab = tabIndex;
		this.activeIndex = tabIndex;
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		tab.doSelect();

		if (this.scrollIntoView) {
			this.scrollTabIntoView(this.allTabHeaders.toArray()[tabIndex]?.nativeElement);
		}
	}

	/**
	 * Emit close index and move focus to a nearby enabled tab.
	 */
	handleClose(event: Event, tab: Tab, tabIndex: number) {
		event.stopPropagation();
		if (tab.disabled) {
			return;
		}
		tab.tabClose.emit();
		this.tabClose.emit(tabIndex);

		// Move focus to a neighboring enabled tab (next-then-previous).
		const headers = this.allTabHeaders?.toArray() ?? [];
		const findNextEnabled = (start: number, step: number) => {
			let i = start;
			while (i >= 0 && i < headers.length) {
				const candidate = this.tabs.toArray()[i];
				if (candidate && !candidate.disabled && i !== tabIndex) {
					return headers[i]?.nativeElement;
				}
				i += step;
			}
			return null;
		};
		const nextEl = findNextEnabled(tabIndex + 1, 1) || findNextEnabled(tabIndex - 1, -1);
		if (nextEl) {
			(nextEl as HTMLElement).focus();
		}
	}

	getCloseTitle(tab: Tab): string {
		const label = !tab.headingIsTemplate && typeof tab.heading === "string" ? ` ${tab.heading}` : "";
		return `Remove${label} tab`;
	}

	/**
	 * Scroll the given tab element into view if it is not already visible.
	 */
	protected scrollTabIntoView(tabEl: HTMLElement | null) {
		if (!tabEl || !this.headerContainer?.nativeElement) {
			return;
		}
		const container = this.headerContainer.nativeElement;
		if (container.scrollWidth <= container.clientWidth) {
			return;
		}

		const buttonWidth = this.OVERFLOW_BUTTON_OFFSET;
		const tabWidth = tabEl.getBoundingClientRect().width;
		const start = tabEl.offsetLeft;
		const end = start + tabWidth;
		const visibleStart = container.scrollLeft + buttonWidth;
		const visibleEnd = container.scrollLeft + container.clientWidth - buttonWidth;

		if (start < visibleStart) {
			container.scrollLeft = start - buttonWidth;
		} else if (end > visibleEnd) {
			container.scrollLeft = end + buttonWidth - container.clientWidth;
		}
	}

	/**
	 * Determines which `Tab` is initially selected.
	 */
	protected setFirstTab() {
		setTimeout(() => {
			let firstTab = this.tabs.find(tab => tab.active);
			if (!firstTab && this.tabs.first) {
				firstTab = this.tabs.first;
				firstTab.active = true;
			}
			if (firstTab) {
				this.currentSelectedTab = this.tabs.toArray().indexOf(firstTab);
				this.activeIndex = this.currentSelectedTab;
				firstTab.doSelect();
			}
		});
	}
}
