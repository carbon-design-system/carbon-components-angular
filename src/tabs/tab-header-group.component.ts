import {
	Component,
	QueryList,
	Input,
	HostListener,
	ContentChildren,
	AfterContentInit,
	ElementRef,
	OnChanges,
	SimpleChanges,
	ChangeDetectorRef,
	ViewChild,
	OnInit,
	Renderer2
} from "@angular/core";

import { Subscription } from "rxjs";
import { EventService } from "carbon-components-angular/utils";

import { TabHeader } from "./tab-header.directive";
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
export class TabHeaderGroup extends BaseTabHeader implements AfterContentInit, OnChanges, OnInit {
	@Input() isNavigation = false;

	/**
	 * ContentChildren of all the tabHeaders.
	 */
	@ContentChildren(TabHeader) tabHeaderQuery: QueryList<TabHeader>;

	@ViewChild("tabList", { static: true }) headerContainer;
	/**
	 * Keeps track of all the subscriptions to the tab header selection events.
	 */
	selectedSubscriptionTracker = new Subscription();

	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	currentSelectedTab = 0;

	constructor(
		protected elementRef: ElementRef,
		protected changeDetectorRef: ChangeDetectorRef,
		protected eventService: EventService,
		protected renderer: Renderer2
	) {
		super(elementRef, changeDetectorRef, eventService, renderer);
	}

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabHeadersArray = this.tabHeaderQuery.toArray();

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
			});
		});
		this.selectedSubscriptionTracker.add(selectedSubscriptions);

		setTimeout(() => this.tabHeaderQuery.toArray()[this.currentSelectedTab].selectTab());
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
