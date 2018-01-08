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
				<svg
					class="icon--sm"
					*ngIf="!disabledLeftArrow"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path d="M10 11.5L6.4 8 10 4.5l-1-1L4.6 8 9 12.5z"/>
					<path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8
					1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8c0-3.7 3.1-6.8 6.8-6.8z"/>
				</svg>
				<svg
					class="icon--sm"
					*ngIf="disabledLeftArrow"
					width="16px"
					height="16px"
					viewBox="0 0 16 16">
					<path d="M0.1,7h1c0.2-1.2,0.6-2.3,1.3-3.2L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7z"/>
					<path d="M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z"/>
					<path d="M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z"/>
					<path d="M9,1.1c1.2,0.2,2.3,0.6,3.2,1.3l0.7-0.7C11.8,0.8,10.5,0.3,9,0.1V1.1z"/>
					<path d="M13.6,12.2l0.7,0.7c0.9-1.1,1.4-2.4,1.6-3.9h-1C14.7,10.2,14.3,11.3,13.6,12.2z"/>
					<path d="M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z"/>
					<path d="M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z"/>
					<path d="M3.1,14.3c1.1,0.9,2.4,1.4,3.9,1.6v-1c-1.2-0.2-2.3-0.6-3.2-1.3L3.1,14.3z"/>
					<polygon points="5.5,7.1 4.6,8 5.5,8.9 6.4,8 6.4,8 6.4,8 "/>
					<polygon points="7.3,7.1 8.2,6.2 7.2,5.3 6.4,6.2 "/>
					<polygon points="10,4.5 9,3.5 8.1,4.4 9.1,5.4 "/>
					<polygon points="10,11.5 9.1,10.6 8.1,11.6 9,12.5 "/>
					<polygon points="7.3,8.9 6.4,9.8 7.2,10.7 8.2,9.8 "/>
				</svg>
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
				<svg
					class="icon--sm"
					*ngIf="!disabledRightArrow"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path d="M6 4.5L9.6 8 6 11.5l1 1L11.4 8 7 3.5z"/>
					<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7
					3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z"/>
				</svg>
				<svg
					class="icon--sm"
					*ngIf="disabledRightArrow"
					width="16px"
					height="16px"
					viewBox="0 0 16 16">
					<path d="M15.9,9h-1c-0.2,1.2-0.6,2.3-1.3,3.2l0.7,0.7C15.2,11.8,15.7,10.5,15.9,9z"/>
					<path d="M15.9,7c-0.2-1.5-0.8-2.8-1.6-3.9l-0.7,0.7c0.7,0.9,1.2,2,1.3,3.2H15.9z"/>
					<path d="M9,14.9v1c1.5-0.2,2.8-0.8,3.9-1.6l-0.7-0.7C11.3,14.3,10.2,14.7,9,14.9z"/>
					<path d="M7,14.9c-1.2-0.2-2.3-0.6-3.2-1.3l-0.7,0.7c1.1,0.9,2.4,1.4,3.9,1.6V14.9z"/>
					<path d="M2.4,3.8L1.7,3.1C0.8,4.2,0.3,5.5,0.1,7h1C1.3,5.8,1.7,4.7,2.4,3.8z"/>
					<path d="M0.1,9c0.2,1.5,0.8,2.8,1.6,3.9l0.7-0.7c-0.7-0.9-1.2-2-1.3-3.2H0.1z"/>
					<path d="M7,1.1v-1C5.5,0.3,4.2,0.8,3.1,1.7l0.7,0.7C4.7,1.7,5.8,1.3,7,1.1z"/>
					<path d="M12.9,1.7C11.8,0.8,10.5,0.3,9,0.1v1c1.2,0.2,2.3,0.6,3.2,1.3L12.9,1.7z"/>
					<polygon points="10.5,8.9 11.4,8 10.5,7.1 9.6,8 9.6,8 9.6,8 "/>
					<polygon points="8.7,8.9 7.8,9.8 8.8,10.7 9.6,9.8 "/>
					<polygon points="6,11.5 7,12.5 7.9,11.6 6.9,10.6 "/>
					<polygon points="6,4.5 6.9,5.4 7.9,4.4 7,3.5 "/>
					<polygon points="8.7,7.1 9.6,6.2 8.8,5.3 7.8,6.2 "/>
				</svg>
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
