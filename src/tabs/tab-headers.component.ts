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

@Component({
	selector: "cdl-tab-headers",
	template: `
		<div [class.is-over-flow]="overflow">
			<button
				aria-label="left"
				aria-hidden="true"
				class="left-arrow clear-button"
				[class.disabled]="disabledLeftArrow"
				(click)="goLeft()">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path class="st0" d="M10 11.5L6.4 8 10 4.5l-1-1L4.6 8 9 12.5z"/>
					<path class="st0" d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM8
					1.2c3.7 0 6.8 3.1 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8S1.2 11.7 1.2 8c0-3.7 3.1-6.8 6.8-6.8z"/>
				</svg>
			</button>
			<ul
				#tabList
				class="cdl-tab-heading"
				role="tablist"
				[ngStyle]="{'left.px':scrollLeft}"
				[class.touch-transition]="touchMove">
				<li *ngFor="let tab of tabs; let i = index;">
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
			<button
				aria-label="right"
				aria-hidden="true"
				class="right-arrow clear-button"
				[class.disabled]="disabledRightArrow"
				(click)="goRight()">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16">
					<path class="st0" d="M6 4.5L9.6 8 6 11.5l1 1L11.4 8 7 3.5z"/>
					<path class="st0" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.8c-3.7 0-6.8-3.1-6.8-6.8 0-3.7
					3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z"/>
				</svg>
			</button>
		</div>
	 `,
	styleUrls: ["./tabs.component.scss"]
})

export class TabHeaders implements AfterViewInit {
	public overflow = false;
	public firstVisibleTab = 0;
	public scrollLength = 0; // replace with local var containing this.tabHeading.nativeElement.offsetWidth
	public allTabHeaders;
	public disabledRightArrow = false;
	public disabledLeftArrow = true;
	public currentSelectedTab: number;
	public touchMove: boolean;
	public prevClientX: number;
	private leftPadding = 15; // button width less tab left padding
	private rightPadding = 70; // both button widths less some padding

	public scrollLeft = 0;

	@Input() tabs: QueryList<Tab>;
	@ViewChild("tabList") headerContainer;

	// keyboard accessibility
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
	@HostListener("touchstart", ["$event"])
	onTouchStart(event) {
		this.touchMove = true;
		this.prevClientX = event.touches[0].clientX;
	}

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

	@HostListener("touchmove", ["$event"])
	onTouchMove(event) {
		let touch = event.touches[0];
		if (this.overflow && this.touchMove) {
			this.scrollLeft -= this.prevClientX - touch.clientX;
			this.prevClientX = touch.clientX;
		}
	}

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

	public onTabFocus(ref, index: number) {
		this.currentSelectedTab = index;
		this.moveTabIntoView(ref);
		// reset scroll left because we're already handling it
		this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
	}

	public scrollCheck() {
		if (this.headerContainer.nativeElement.offsetWidth > this.headerContainer.nativeElement.parentElement.offsetWidth) {
			this.overflow = true;
			this.disabledRightArrow = false;
			this.scrollLength = this.headerContainer.nativeElement.offsetWidth;
		} else {
			this.overflow = false;
			this.scrollLeft = 0;
		}
	}

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
			let visibleTab = this.allTabHeaders[this.firstVisibleTab];
			this.scrollLeft = -(visibleTab.offsetLeft - this.leftPadding);
		}
	}

	public goRight() {
		if (this.disabledRightArrow) {
			return;
		}

		if (this.disabledLeftArrow) {
			this.disabledLeftArrow = false;
		}
		let headerContainer = this.headerContainer.nativeElement.parentElement;
		if (this.firstVisibleTab < this.allTabHeaders.length - 1) {
			let visibleTab = this.allTabHeaders[this.firstVisibleTab];
			this.scrollLeft = -(visibleTab.offsetLeft + visibleTab.offsetWidth - 15);
			this.firstVisibleTab++;
			if (this.scrollLength + this.scrollLeft <= headerContainer.offsetWidth) {
				this.disabledRightArrow = true;
				this.scrollLeft = -(this.scrollLength - headerContainer.offsetWidth + this.rightPadding);
			}
		}
	}

	public selectTab(ref, tab: Tab, tabIndex: number) {
		if (tab.disabled) {
			return;
		}
		this.currentSelectedTab = tabIndex;
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		this.moveTabIntoView(ref);
	}

	public moveTabIntoView(tab) {
		if (!this.overflow) { return; }
		// if the target is behind the right edge move it into view
		let headerContainer = this.headerContainer.nativeElement.parentElement;
		if (tab.offsetLeft + tab.offsetWidth > headerContainer.offsetWidth - (this.scrollLeft + this.rightPadding)) {
			this.scrollLeft = -((tab.offsetLeft + tab.offsetWidth + this.rightPadding) - headerContainer.offsetWidth);
		} else if (tab.offsetLeft + this.scrollLeft < 0) { // if the target is scrolled behind the left edge move it into view
			this.scrollLeft = -(tab.offsetLeft - this.leftPadding);
		}
		this.updateOverflowButtons();
	}

	public findFirstVisibleTab() {
		for (let i = 0; i < this.allTabHeaders.length; i++) {
			// find the first tab that isn't behind the left edge
			if (this.allTabHeaders[i].offsetLeft + this.scrollLeft > 0) {
				return i;
			}
		}
	}

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
