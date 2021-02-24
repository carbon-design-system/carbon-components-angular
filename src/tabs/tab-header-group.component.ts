import {
	Component,
	QueryList,
	Input,
	HostListener,
	ContentChildren,
	OnDestroy,
	AfterContentInit,
	ElementRef,
	TemplateRef,
	OnChanges,
	SimpleChanges,
	ChangeDetectorRef,
	ViewChild,
	OnInit
} from "@angular/core";

import { TabHeader } from "./tab-header.component";
import { fromEvent, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
	selector: "ibm-tab-header-group",
	template: `
	<nav
		class="bx--tabs bx--tabs--scrollable"
		[ngClass]="{
			'bx--skeleton': skeleton,
			'bx--tabs--container bx--tabs--scrollable--container': type === 'container'
		}"
		role="navigation"
		[attr.aria-label]="ariaLabel"
		[attr.aria-labelledby]="ariaLabelledby">
		<button
			#leftOverflowNavButton
			type="button"
			[ngClass]="{
				'bx--tab--overflow-nav-button': hasHorizontalOverflow,
				'bx--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}"
			(click)="handleOverflowNavClick(-1)"
			(mousedown)="handleOverflowNavMouseDown(-1)"
			(mouseup)="handleOverflowNavMouseUp()">
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
		<div *ngIf="!leftOverflowNavButtonHidden" class="bx--tabs__overflow-indicator--left"></div>
		<ul
			#tabList
			class="bx--tabs--scrollable__nav"
			role="tablist"
			(scroll)="handleScroll()">
			<li role="presentation">
				<ng-container *ngIf="contentBefore" [ngTemplateOutlet]="contentBefore"></ng-container>
			</li>
			<ng-content></ng-content>
			<li role="presentation">
				<ng-container *ngIf="contentAfter" [ngTemplateOutlet]="contentAfter"></ng-container>
			</li>
		</ul>
		<div *ngIf="!rightOverflowNavButtonHidden" class="bx--tabs__overflow-indicator--right"></div>
		<button
			#rightOverflowNavButton
			type="button"
			[ngClass]="{
				'bx--tab--overflow-nav-button': hasHorizontalOverflow,
				'bx--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}"
			(click)="handleOverflowNavClick(1)"
			(mousedown)="handleOverflowNavMouseDown(1)"
			(mouseup)="handleOverflowNavMouseUp()">
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
	</nav>
	`
})
export class TabHeaderGroup implements AfterContentInit, OnDestroy, OnChanges, OnInit {
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus: boolean;
	/**
	 * Set to `true` to put tabs in a loading state.
	 */
	@Input() skeleton = false;
	/**
	 * Sets the aria label on the nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the nav element.
	 */
	@Input() ariaLabelledby: string;

	@Input() contentAfter: TemplateRef<any>;

	@Input() contentBefore: TemplateRef<any>;

	/**
	 * Set to 'true' to have all pane references associated with each tab header
	 * in the tab header group cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;

	@Input() isNavigation = false;
	@Input() type: "default" | "container" = "default";

	/**
	 * ContentChildren of all the tabHeaders.
	 */
	@ContentChildren(TabHeader) tabHeaderQuery: QueryList<TabHeader>;
	// @ts-ignore
	@ViewChild("tabList", { static: true }) headerContainer;
	// @ts-ignore
	@ViewChild("rightOverflowNavButton", { static: true }) rightOverflowNavButton;
	// @ts-ignore
	@ViewChild("leftOverflowNavButton", { static: true }) leftOverflowNavButton;
	/**
	 * Keeps track of all the subscriptions to the tab header selection events.
	 */
	selectedSubscriptionTracker = new Subscription();

	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	public currentSelectedIndex = 0;

	public get hasHorizontalOverflow() {
		const tabList = this.headerContainer.nativeElement;
		return tabList.scrollWidth > tabList.clientWidth;
	}

	public get leftOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow || !tabList.scrollLeft;
	}

	public get rightOverflowNavButtonHidden() {
		const tabList = this.headerContainer.nativeElement;
		return !this.hasHorizontalOverflow ||
			(tabList.scrollLeft + tabList.clientWidth) === tabList.scrollWidth;
	}

	// width of the overflow buttons
	OVERFLOW_BUTTON_OFFSET = 40;

	private _cacheActive = false;

	private overflowNavInterval;
	private windowResizeSubscription;

	constructor(protected elementRef: ElementRef, protected changeDetectorRef: ChangeDetectorRef) { }

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabHeadersArray = Array.from<any>(this.tabHeaderQuery);

		if (event.key === "Right" || event.key === "ArrowRight") {
			if (this.currentSelectedIndex < tabHeadersArray.length - 1) {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[this.currentSelectedIndex + 1].disabled) {
					tabHeadersArray[this.currentSelectedIndex + 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedIndex + 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex++;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[0].disabled) {
					tabHeadersArray[0].selectTab();
				} else {
					tabHeadersArray[0].tabItem.nativeElement.focus();
					this.currentSelectedIndex = 0;
				}
			}
		}

		if (event.key === "Left" || event.key === "ArrowLeft") {
			if (this.currentSelectedIndex > 0) {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[this.currentSelectedIndex - 1].disabled) {
					tabHeadersArray[this.currentSelectedIndex - 1].selectTab();
				} else {
					tabHeadersArray[this.currentSelectedIndex - 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex--;
				}
			} else {
				event.preventDefault();
				if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
					tabHeadersArray[tabHeadersArray.length - 1].selectTab();
				} else {
					tabHeadersArray[tabHeadersArray.length - 1].tabItem.nativeElement.focus();
					this.currentSelectedIndex = tabHeadersArray.length - 1;
				}
			}
		}

		if (event.key === "Home") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[0].disabled) {
				tabHeadersArray[0].selectTab();
			} else {
				tabHeadersArray[0].tabItem.nativeElement.focus();
				this.currentSelectedIndex = 0;
			}
		}

		if (event.key === "End") {
			event.preventDefault();
			if (this.followFocus && !tabHeadersArray[tabHeadersArray.length - 1].disabled) {
				tabHeadersArray[tabHeadersArray.length - 1].selectTab();
			} else {
				tabHeadersArray[tabHeadersArray.length - 1].tabItem.nativeElement.focus();
				this.currentSelectedIndex = tabHeadersArray.length - 1;
			}
		}

		// `"Spacebar"` is IE11 specific value
		if ((event.key === " " || event.key === "Spacebar") && !this.followFocus) {
			tabHeadersArray[this.currentSelectedIndex].selectTab();
		}
	}

	ngOnInit() {
		this.windowResizeSubscription = fromEvent(window, "resize", { passive: true })
			.pipe(debounceTime(200))
			.subscribe(() => this.handleScroll());
	}

	ngAfterContentInit() {
		this.selectedSubscriptionTracker.unsubscribe();

		if (this.tabHeaderQuery) {
			this.tabHeaderQuery.toArray()
				.forEach(tabHeader => {
					tabHeader.cacheActive = this.cacheActive;
					tabHeader.paneTabIndex = this.isNavigation ? null : 0;
				});
		}

		const selectedSubscriptions = this.tabHeaderQuery.toArray().forEach(tabHeader => {
			tabHeader.selected.subscribe(() => {
				this.currentSelectedIndex = this.tabHeaderQuery.toArray().indexOf(tabHeader);
				// The Filter takes the current selected tab out, then all other headers are
				// deactivated and their associated pane references are also deactivated.
				this.tabHeaderQuery.toArray().filter(header => header !== tabHeader)
					.forEach(filteredHeader => {
						filteredHeader.active = false;
						if (filteredHeader.paneReference) {
							filteredHeader.paneReference.active = false;
						}
					});
			});
		});
		this.selectedSubscriptionTracker.add(selectedSubscriptions);

		setTimeout(() => this.tabHeaderQuery.toArray()[this.currentSelectedIndex].selectTab());
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabHeaderQuery) {
			if (changes.cacheActive) {
				this.tabHeaderQuery.toArray().forEach(tabHeader => tabHeader.cacheActive = this.cacheActive);
			}

			if (changes.isNavigation) {
				this.tabHeaderQuery.toArray()
					.forEach(tabHeader => tabHeader.paneTabIndex = this.isNavigation ? null : 0);
			}
		}
	}

	public getSelectedTab(): any {
		const selected =  this.tabHeaderQuery.toArray()[this.currentSelectedIndex];
		if (selected) {
			return selected;
		}
		return {
			headingIsTemplate: false,
			heading: ""
		};
	}

	public handleScroll() {
		this.changeDetectorRef.markForCheck();
	}

	public handleOverflowNavClick(direction: number, multiplier = 15) {
		const tabList = this.headerContainer.nativeElement;

		const { clientWidth, scrollLeft, scrollWidth } = tabList;
		if (direction === 1 && !scrollLeft) {
			tabList.scrollLeft += this.OVERFLOW_BUTTON_OFFSET;
		}

		tabList.scrollLeft += direction * multiplier;

		const leftEdgeReached =
			direction === -1 && scrollLeft < this.OVERFLOW_BUTTON_OFFSET;
		const rightEdgeReached =
			direction === 1 &&
			scrollLeft + clientWidth >= scrollWidth - this.OVERFLOW_BUTTON_OFFSET;

		if (leftEdgeReached) {
			this.rightOverflowNavButton.nativeElement.focus();
		}
		if (rightEdgeReached) {
			this.leftOverflowNavButton.nativeElement.focus();
		}
	}

	public handleOverflowNavMouseDown(direction: number) {
		const tabList = this.headerContainer.nativeElement;

		this.overflowNavInterval = setInterval(() => {
			const { clientWidth, scrollLeft, scrollWidth } = tabList;

			// clear interval if scroll reaches left or right edge
			const leftEdgeReached = direction === -1 && scrollLeft < this.OVERFLOW_BUTTON_OFFSET;
			const rightEdgeReached =
				direction === 1 &&
				scrollLeft + clientWidth >= scrollWidth - this.OVERFLOW_BUTTON_OFFSET;

			if (leftEdgeReached || rightEdgeReached) {
				clearInterval(this.overflowNavInterval);
			}

			// account for overflow button appearing and causing tablist width change
			this.handleOverflowNavClick(direction);
		});
	}

	public handleOverflowNavMouseUp() {
		clearInterval(this.overflowNavInterval);
	}

	ngOnDestroy() {
		this.selectedSubscriptionTracker.unsubscribe();
		this.windowResizeSubscription.unsubscribe();
	}
}
