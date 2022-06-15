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
	TemplateRef,
	OnChanges,
	SimpleChanges,
	OnInit,
	ChangeDetectorRef,
	HostBinding,
	Renderer2
} from "@angular/core";
import { EventService } from "carbon-components-angular/utils";

import { Tab } from "./tab.component";

/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 */
@Component({
	selector: "ibm-tab-headers",
	template: `
		<button
			type="button"
			(click)="handleOverflowNavClick(-1)"
			(pointerdown)="handleOverflowNavMouseDown(-1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--previous"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}">
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
			[attr.aria-label]="ariaLabel"
			(scroll)="handleScroll()">
			<ng-container *ngIf="contentBefore" [ngTemplateOutlet]="contentBefore"></ng-container>
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
			<ng-container *ngIf="contentAfter" [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		<button
			type="button"
			(click)="handleOverflowNavClick(1)"
			(pointerdown)="handleOverflowNavMouseDown(1)"
			(pointerup)="handleOverflowNavMouseUp()"
			(pointerleave)="handleOverflowNavMouseUp()"
			(pointerout)="handleOverflowNavMouseUp()"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--next"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}">
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

export class TabHeaders implements AfterContentInit, OnChanges, OnInit {
	/**
	 * List of `Tab` components.
	 */
	// disable the next line because we need to rename the input
	// tslint:disable-next-line
	@Input("tabs") tabInput: QueryList<Tab>;
	/**
	 * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
	 * Duplicate from `n-tabs` to support standalone headers
	 */
	@Input() cacheActive = false;
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus: boolean;

	/**
	 * Sets the aria label on the nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the nav element.
	 */
	@Input() ariaLabelledby: string;

	@Input() contentBefore: TemplateRef<any>;
	@Input() contentAfter: TemplateRef<any>;

	@Input() type: "line" | "contained" = "line";
	@Input() theme: "dark" | "light" = "dark";

	@HostBinding("class.cds--tabs") tabsClass = true;
	@HostBinding("class.cds--tabs--contained") get containedClass() {
		return this.type === "contained";
	}
	@HostBinding("class.cds--tabs--light") get themeClass() {
		return this.theme === "light";
	}

	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 */
	// @ts-ignore
	@ViewChild("tabList", { static: true }) headerContainer;
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
	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	currentSelectedTab: number;

	get hasHorizontalOverflow() {
		const tabList = this.headerContainer.nativeElement;
		return tabList.scrollWidth > tabList.clientWidth;
	}

	get leftOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow || !tabList.scrollLeft;
	}

	get rightOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow ||
			(tabList.scrollLeft + tabList.clientWidth) === tabList.scrollWidth;
	}

	// width of the overflow buttons
	OVERFLOW_BUTTON_OFFSET = 44;

	private longPressInterval = null;
	private tickInterval = null;

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		private renderer: Renderer2
	) { }

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabsArray = this.tabs.toArray();

		// "Right" is an ie11 specific value
		if (event.key === "Right" || event.key === "ArrowRight") {
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

		// "Left" is an ie11 specific value
		if (event.key === "Left" || event.key === "ArrowLeft") {
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

		// `"Spacebar"` is IE11 specific value
		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			this.selectTab(event.target, tabsArray[this.currentSelectedTab], this.currentSelectedTab);
		}
	}

	ngOnInit() {
		this.eventService.on(window as any, "resize", () => this.handleScroll());
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

	handleScroll() {
		this.changeDetectorRef.markForCheck();
	}

	handleOverflowNavClick(direction: number) {
		const tabList = this.headerContainer.nativeElement;

		const { clientWidth, scrollLeft, scrollWidth } = tabList;
		if (direction === 1) {
			tabList.scrollLeft = Math.min(scrollLeft + (scrollWidth / this.tabs.length) * 1.5,
				scrollWidth - clientWidth);
		} else if (direction === -1) {
			tabList.scrollLeft = Math.max(scrollLeft - (scrollWidth / this.tabs.length) * 1.5, 0);
		}
	}

	handleOverflowNavMouseDown(direction: number) {
		const tabList = this.headerContainer.nativeElement;

		this.longPressInterval = setTimeout(() => {
			// Manually overriding scroll behvior to `auto` to make animation work correctly
			this.renderer.setStyle(tabList, "scroll-behavior", "auto");

			this.tickInterval = setInterval(() => {
				tabList.scrollLeft += (direction * 3);
				// clear interval if scroll reaches left or right edge
				if (this.leftOverflowNavButtonHidden || this.rightOverflowNavButtonHidden) {
					return () => {
						clearInterval(this.tickInterval);
						this.handleOverflowNavMouseUp();
					};
				}
			});

			return () => {
				clearInterval(this.longPressInterval);
			};
		}, 500);
	}

	/**
	 * Clear intervals/Timeout & reset scroll behavior
	 */
	handleOverflowNavMouseUp() {
		clearInterval(this.tickInterval);
		clearTimeout(this.longPressInterval);

		// Reset scroll behavior
		this.renderer.setStyle(this.headerContainer.nativeElement, "scroll-behavior", "smooth");
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
