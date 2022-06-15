import {
	Component,
	QueryList,
	Input,
	HostListener,
	ContentChildren,
	AfterContentInit,
	ElementRef,
	TemplateRef,
	OnChanges,
	SimpleChanges,
	ChangeDetectorRef,
	ViewChild,
	OnInit,
	HostBinding,
	Renderer2
} from "@angular/core";

import { Subscription } from "rxjs";
import { EventService } from "carbon-components-angular/utils";

import { TabHeader } from "./tab-header.component";

@Component({
	selector: "ibm-tab-header-group",
	template: `
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--previous"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': leftOverflowNavButtonHidden
			}"
			(click)="handleOverflowNavClick(-1)"
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
			(scroll)="handleScroll()"
			#tabList>
			<ng-container *ngIf="contentBefore" [ngTemplateOutlet]="contentBefore"></ng-container>
			<ng-content></ng-content>
			<ng-container *ngIf="contentAfter" [ngTemplateOutlet]="contentAfter"></ng-container>
		</div>
		<button
			type="button"
			class="cds--tab--overflow-nav-button cds--tab--overflow-nav-button--next"
			[ngClass]="{
				'cds--tab--overflow-nav-button--hidden': rightOverflowNavButtonHidden
			}"
			(click)="handleOverflowNavClick(1)"
			(pointerdown)="handleOverflowNavMouseDown(1)"
			(pointerup)="handleOverflowNavMouseUp($event)"
			(pointerleave)="handleOverflowNavMouseUp($event)"
			(pointerout)="handleOverflowNavMouseUp($event)"
			(pointercancel)="handleOverflowNavMouseUp($event)">
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
export class TabHeaderGroup implements AfterContentInit, OnChanges, OnInit {
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

	@Input() contentAfter: TemplateRef<any>;

	@Input() contentBefore: TemplateRef<any>;

	/**
	 * Set to 'true' to have all pane references associated with each tab header
	 * in the tab header group cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;

	@Input() isNavigation = false;

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
	 * ContentChildren of all the tabHeaders.
	 */
	@ContentChildren(TabHeader) tabHeaderQuery: QueryList<TabHeader>;
	// @ts-ignore
	@ViewChild("tabList", { static: true }) headerContainer;
	/**
	 * Keeps track of all the subscriptions to the tab header selection events.
	 */
	selectedSubscriptionTracker = new Subscription();

	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	currentSelectedIndex = 0;

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

	private longPressInterval;
	private tickInterval;

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
		let tabHeadersArray = this.tabHeaderQuery.toArray();

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
		this.eventService.on(window as any, "resize", () => this.handleScroll());
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

	getSelectedTab(): any {
		const selected = this.tabHeaderQuery.toArray()[this.currentSelectedIndex];
		if (selected) {
			return selected;
		}
		return {
			headingIsTemplate: false,
			heading: ""
		};
	}

	handleScroll() {
		this.changeDetectorRef.markForCheck();
	}

	handleOverflowNavClick(direction: number) {
		const tabList = this.headerContainer.nativeElement;

		const { clientWidth, scrollLeft, scrollWidth } = tabList;
		if (direction === 1) {
			tabList.scrollLeft = Math.min(scrollLeft + (scrollWidth / this.tabHeaderQuery.length) * 1.5,
				scrollWidth - clientWidth);
		} else if (direction === -1) {
			tabList.scrollLeft = Math.max(scrollLeft - (scrollWidth / this.tabHeaderQuery.length) * 1.5, 0);
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
}
