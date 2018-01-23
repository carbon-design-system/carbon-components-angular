import {
	Component,
	QueryList,
	Input,
	HostListener,
	ViewChild,
	ViewChildren,
	AfterViewInit
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/fromEvent";

import { Tab } from "./tab.component";


/**
 * The `TabHeaders` neutrino component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-tab-headers",
	template: `
		<div
			class="tabs">
			<button
				*ngIf="this.overflow"
				aria-hidden="true"
				attr.aria-label="{{'TABS.BUTTON_ARIA_LEFT' | translate}}"
				role="button"
				class="tabs_scroll-btn--left"
				[class.disabled]="disabledLeftArrow"
				(click)="goLeft()">
				<n-static-icon *ngIf="!disabledLeftArrow" icon="chevron_left" size="sm"></n-static-icon>
				<n-static-icon *ngIf="disabledLeftArrow" icon="chevron_left_disabled" size="sm"></n-static-icon>
			</button>
			<div [ngClass]="{'tablist-overflow': overflow}">
			<ul
				#tabList
				role="tablist"
				[ngStyle]="{'left.px':scrollLeft}"
				[class.touch-transition]="touchMove">
				<li *ngFor="let tab of tabs; let i = index;"
					class="tabs_item">
					<a
						#tabref
						href="javascript:void(0)"
						draggable="false"
						role="tab"
						(click)="selectTab(tabref, tab, i)"
						(focus)="onTabFocus(tabref, i)"
						[attr.aria-selected]="tab.active"
						[attr.tabindex]="tab.active?0:-1"
						[attr.aria-controls]="tab.id"
						id="{{tab.id}}-header"
						[ngClass]="{'active-tab': tab.active, 'disabled-tab': tab.disabled}">
						<span *ngIf="!tab.headingIsTemplate">
							{{tab.heading}}
						</span>
						<ng-template
							*ngIf="tab.headingIsTemplate"
							[ngTemplateOutlet]="tab.heading">
						</ng-template>
					</a>
				</li>
			</ul>
			</div>
			<button
				*ngIf="this.overflow"
				aria-hidden="true"
				attr.aria-label="{{'TABS.BUTTON_ARIA_RIGHT' | translate}}"
				role="button"
				class="tabs_scroll-btn--right"
				[class.disabled]="disabledRightArrow"
				(click)="goRight()">
				<n-static-icon *ngIf="!disabledRightArrow" icon="chevron_right" size="sm"></n-static-icon>
				<n-static-icon *ngIf="disabledRightArrow" icon="chevron_right_disabled" size="sm"></n-static-icon>
			</button>
		</div>
	 `
})

export class TabHeaders implements AfterViewInit {
	/**
	 * List of `Tab` components.
	 * @type {QueryList<Tab>}
	 * @memberof TabHeaders
	 */
	@Input() tabs: QueryList<Tab>;
	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 * @memberof TabHeaders
	 */
	@ViewChild("tabList") headerContainer;

	/**
	 * Indicates whether or not the headings overflow.
	 * @type {boolean}
	 * @memberof TabHeaders
	 */
	public overflow = false;
	/**
	 * The index of the first visible tab.
	 * @type {number}
	 * @memberof TabHeaders
	 */
	public firstVisibleTab = 0;
	/**
	 * The distance that the list will scroll when an overflow button onClick has fired.
	 * @type {number}
	 * @memberof TabHeaders
	 */
	public scrollLength = 0; // replace with local var containing this.tabHeading.nativeElement.offsetWidth
	/**
	 * The DOM element containing the `Tab` headings displayed.
	 * @type {Array<any>}
	 * @memberof TabHeaders
	 */
	public allTabHeaders;
	/**
	 * Sets the right overflow arrow to disabled if value is 'true'.
	 * Initially set to false.
	 * @type {boolean}
	 * @memberof TabHeaders
	 */
	public disabledRightArrow = false;
	/**
	 * Sets the left overflow arrow to disabled if value is 'true'.
	 * Initially set to true.
	 * @type {boolean}
	 * @memberof TabHeaders
	 */
	public disabledLeftArrow = true;
	/**
	 * Controls the manual focusing done by tabbing through headings.
	 * @type {number}
	 * @memberof TabHeaders
	 */
	public currentSelectedTab: number;
	/**
	 * Represents whether user is currently touch-scrolling the headings.
	 * @type {boolean}
	 * @memberof TabHeaders
	 */
	public touchMove: boolean;
	/**
	 * Maintains the previous X position used to caculate how much to scroll
	 * the headings.
	 * @type {number}
	 * @memberof TabHeaders
	 */
	public prevClientX: number;

	/**
	 * Variable that explicitly sets the amount in which the list of headings is scrolled.
	 * @type {number}
	 * @memberof TabHeaders
	 */
	public scrollLeft = 0;

	/**
	 * Accounts for button width and tab padding for the left side.
	 * @private
	 * @type {number}
	 * @memberof TabHeaders
	 */
	private leftPadding = 15; // button width less tab left padding
	/**
	 * Accounts for both overflow button widths.
	 * @private
	 * @type {number}
	 * @memberof TabHeaders
	 */
	private rightPadding = 70; // both button widths less some padding

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 * @param {any} event
	 * @memberof TabHeaders
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		if (event.key === "ArrowRight" || event.key === "ArrowDown") {
			if (this.currentSelectedTab < this.allTabHeaders.length - 1) {
				event.preventDefault();
				this.allTabHeaders[this.currentSelectedTab + 1].focus();
			}
		}

		if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			if (this.currentSelectedTab > 0) {
				event.preventDefault();
				this.allTabHeaders[this.currentSelectedTab - 1].focus();
			}
		}
	}

	// TODO
	// draggable
	/**
	 * Stores the X coordinate of the 'touchstart'
	 * event in order to calculate touch-scrolling.
	 * @param {any} event
	 * @memberof TabHeaders
	 */
	@HostListener("touchstart", ["$event"])
	onTouchStart(event) {
		this.touchMove = true;
		this.prevClientX = event.touches[0].clientX;
	}

	/**
	 * Handles any touch-scrolling where user scrolled past the bound
	 * and updates the overflow buttons for touch-scrolling on event 'touchend'.
	 * @param {any} event
	 * @memberof TabHeaders
	 */
	@HostListener("touchend", ["$event"])
	onTouchEnd(event) {
		this.touchMove = false;
		if (this.overflow) {
			// return to the leftmost resting place
			if (this.scrollLeft > 0) {
				this.scrollLeft = 0;
			}
			// return to the rightmost resting place
			let headerContainer = this.headerContainer.nativeElement.parentElement;
			if (this.scrollLength + this.scrollLeft <= headerContainer.offsetWidth) {
				this.scrollLeft = -(this.scrollLength - headerContainer.offsetWidth + this.rightPadding);
			}
			this.updateOverflowButtons();
		}
	}

	/**
	 * Scrolls the list of `Tab` headings on event 'touchmove'.
	 * @param {any} event
	 * @memberof TabHeaders
	 */
	@HostListener("touchmove", ["$event"])
	onTouchMove(event) {
		let touch = event.touches[0];
		if (this.overflow && this.touchMove) {
			this.scrollLeft -= this.prevClientX - touch.clientX;
			this.prevClientX = touch.clientX;
		}
	}

	/**
	 * Performs check to see if there is overflow and needs scrolling.
	 * @memberof TabHeaders
	 */
	ngAfterViewInit() {
		// this needs to be rethough, and it's not an issue in prod mode
		//  we just need this so that dev mode doesn't throw an error and
		//  break our tests
		setTimeout(() => {
			this.scrollCheck();
		});

		// check for window resize
		Observable.fromEvent(window, "resize")
			.throttleTime(100)
			.subscribe(() => this.scrollCheck());
		this.allTabHeaders = this.headerContainer.nativeElement.querySelectorAll("li a");
	}

	/**
	 * Controls manually focusing tabs.
	 * @param {HTMLElement} ref
	 * @param {number} index
	 * @memberof TabHeaders
	 */
	public onTabFocus(ref: HTMLElement, index: number) {
		this.currentSelectedTab = index;
		this.moveTabIntoView(ref);
		// reset scroll left because we're already handling it
		this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
	}

	/**
	 * Checks if there is overflow while displaying all the `Tab` headings.
	 * @memberof TabHeaders
	 */
	public scrollCheck() {
		if (this.headerContainer.nativeElement.offsetWidth > this.headerContainer.nativeElement.parentElement.parentElement.offsetWidth) {
			this.overflow = true;
			this.disabledRightArrow = false;
			this.scrollLength = this.headerContainer.nativeElement.offsetWidth;
		} else {
			this.overflow = false;
			this.scrollLeft = 0;
		}
	}

	/**
	 * Controls scrolling the headers left using the left overflow arrow.
	 * @returns null
	 * @memberof TabHeaders
	 */
	public goLeft() {
		if (this.disabledLeftArrow) {
			return;
		}

		if (this.disabledRightArrow) {
			this.disabledRightArrow = false;
		}

		if (this.firstVisibleTab === 1) {
			this.disabledLeftArrow = true;
		}

		if (this.firstVisibleTab >= 0) {
			this.firstVisibleTab--;
			let visibleTab = this.allTabHeaders[this.firstVisibleTab].parentElement;
			this.scrollLeft = -(visibleTab.offsetLeft - this.leftPadding);
		}
	}

	/**
	 * Controls scrolling the headers right using the right overflow arrow.
	 * @returns null
	 * @memberof TabHeaders
	 */
	public goRight() {
		if (this.disabledRightArrow) {
			return;
		}

		if (this.disabledLeftArrow) {
			this.disabledLeftArrow = false;
		}

		let headerContainer = this.headerContainer.nativeElement.parentElement;
		if (this.firstVisibleTab < this.allTabHeaders.length - 1) {
			let visibleTab = this.allTabHeaders[this.firstVisibleTab].parentElement;
			this.scrollLeft = -(visibleTab.offsetLeft + visibleTab.offsetWidth);
			this.firstVisibleTab++;
			if (this.scrollLength + this.scrollLeft <= headerContainer.offsetWidth) {
				this.disabledRightArrow = true;
				this.scrollLeft = -(this.scrollLength - headerContainer.offsetWidth + this.rightPadding);
			}
		}
	}

	/**
	 * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
	 * @param {HTMLElement} ref
	 * @param {Tab} tab
	 * @param {number} tabIndex
	 * @returns null
	 * @memberof TabHeaders
	 */
	public selectTab(ref: HTMLElement, tab: Tab, tabIndex: number) {
		if (tab.disabled) {
			return;
		}

		this.currentSelectedTab = tabIndex;
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		tab.doSelect();
		this.moveTabIntoView(ref);
	}

	/**
	 * Ensures 'tab' is in view in the view DOM.
	 * @param {HTMLElement} tab
	 * @returns null
	 * @memberof TabHeaders
	 */
	public moveTabIntoView(tab: HTMLElement) {
		if (!this.overflow) { return; }
		// if the target is behind the right edge move it into view
		let headerContainer = this.headerContainer.nativeElement.parentElement;
		let tabLi = tab.offsetParent as HTMLElement;

		if (tabLi.offsetLeft + tabLi.offsetWidth > (headerContainer.offsetWidth - this.scrollLeft)) {
			this.scrollLeft = -((tabLi.offsetLeft + tabLi.offsetWidth + this.rightPadding) - headerContainer.offsetWidth);
		} else if (tabLi.offsetLeft + this.scrollLeft < 0) { // if the target is scrolled behind the left edge move it into view
			this.scrollLeft = -(tabLi.offsetLeft - this.leftPadding);
		}
		this.updateOverflowButtons();
	}

	/**
	 * Iterates through the tab items and returns first tab visible in the view DOM.
	 * @returns index of the first visible tab
	 * @memberof TabHeaders
	 */
	public findFirstVisibleTab() {
		for (let i = 0; i < this.allTabHeaders.length; i++) {
			// find the first tab that isn't behind the left edge
			if (this.allTabHeaders[i].offsetParent.offsetLeft + this.scrollLeft > 0) {
				return i;
			}
		}
	}

	/**
	 * Checks if the headings can scroll left or right and updates the
	 * overflow arrows.
	 * @memberof TabHeaders
	 */
	public updateOverflowButtons() {
		this.firstVisibleTab = this.findFirstVisibleTab();
		if (this.firstVisibleTab > 0) {
			this.disabledLeftArrow = false;
		} else {
			this.disabledLeftArrow = true;
		}
		if (this.scrollLength + this.scrollLeft <= this.headerContainer.nativeElement.parentElement.offsetWidth) {
			this.disabledRightArrow = true;
		} else {
			this.disabledRightArrow = false;
		}
	}
}
