import {
	Component,
	QueryList,
	Input,
	HostListener,
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
			[title]="translations.BUTTON_ARIA_LEFT">
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
			(scroll)="handleScroll()">
			<ng-container [ngTemplateOutlet]="contentBefore"></ng-container>
			<button
				*ngFor="let tab of tabs; let i = index;"
				#tabItem
				role="tab"
				[attr.aria-selected]="tab.active"
				[attr.tabindex]="(tab.active?0:-1)"
				[attr.aria-controls]="tab.id"
				[attr.aria-disabled]="tab.disabled"
				[ngClass]="{
					'cds--tabs__nav-item--selected': tab.active,
					'cds--tabs__nav-item--disabled': tab.disabled
				}"
				class="cds--tabs__nav-item cds--tabs__nav-link"
				type="button"
				draggable="false"
				id="{{tab.id}}-header"
				(focus)="onTabFocus(tabItem, i)"
				(click)="selectTab(tabItem, tab, i)">
				<ng-container *ngIf="!tab.headingIsTemplate">
					{{ tab.heading }}
				</ng-container>
				<ng-template
					*ngIf="tab.headingIsTemplate"
					[ngTemplateOutlet]="tab.heading"
					[ngTemplateOutletContext]="{$implicit: tab.context}">
				</ng-template>
			</button>
			<ng-container [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
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
			[title]="translations.BUTTON_ARIA_RIGHT">
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

	@Input() translations = this.i18n.get().TABS;

	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 */
	@ViewChild("tabList", { static: true }) headerContainer: ElementRef<HTMLElement>;
	/**
	 * ContentChild of all the n-tabs
	 */
	@ContentChildren(Tab) tabQuery: QueryList<Tab>;
	/**
	 * set to tabQuery if tabInput is empty
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

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabsArray = this.tabs.toArray();

		if (event.key === "ArrowRight") {
			if (this.currentSelectedTab < this.allTabHeaders.length - 1) {
				event.preventDefault();
				if (this.followFocus) {
					this.selectTab(event.target, tabsArray[this.currentSelectedTab + 1], this.currentSelectedTab);
				}
				this.allTabHeaders.toArray()[this.currentSelectedTab + 1].nativeElement.focus();
			} else {
				event.preventDefault();
				if (this.followFocus) {
					this.selectTab(event.target, tabsArray[0], 0);
				}
				this.allTabHeaders.first.nativeElement.focus();
			}
		}

		if (event.key === "ArrowLeft") {
			if (this.currentSelectedTab > 0) {
				event.preventDefault();
				if (this.followFocus) {
					this.selectTab(event.target, tabsArray[this.currentSelectedTab - 1], this.currentSelectedTab);
				}
				this.allTabHeaders.toArray()[this.currentSelectedTab - 1].nativeElement.focus();
			} else {
				event.preventDefault();
				if (this.followFocus) {
					this.selectTab(event.target, tabsArray[this.allTabHeaders.length - 1], this.allTabHeaders.length);
				}
				this.allTabHeaders.toArray()[this.allTabHeaders.length - 1].nativeElement.focus();
			}
		}

		if (event.key === "Home") {
			event.preventDefault();
			if (this.followFocus) {
				this.selectTab(event.target, tabsArray[0], 0);
			}
			this.allTabHeaders.toArray()[0].nativeElement.focus();
		}

		if (event.key === "End") {
			event.preventDefault();
			if (this.followFocus) {
				this.selectTab(event.target, tabsArray[this.allTabHeaders.length - 1], this.allTabHeaders.length);
			}
			this.allTabHeaders.toArray()[this.allTabHeaders.length - 1].nativeElement.focus();
		}

		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			this.selectTab(event.target, tabsArray[this.currentSelectedTab], this.currentSelectedTab);
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
		this.resizeObserver.unobserve(this.headerContainer.nativeElement);
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
		this.currentSelectedTab = index;
		// reset scroll left because we're already handling it
		this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
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
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		tab.doSelect();
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
				firstTab.doSelect();
			}
		});
	}
}
