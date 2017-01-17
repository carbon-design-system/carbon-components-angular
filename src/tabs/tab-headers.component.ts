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

import { KeyCodes } from "../constant/keys";
import { Tab } from "./tab.component";

@Component({
	selector: "cdl-tab-headers",
	template: `
		<div [class.is-over-flow]="isOverFlow">
			<button 
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
				[class.touch-transition]="isTouching">
				<li *ngFor="let tab of tabs; let i = index;">
					<a 
						href="javascript:void(0)" 
						draggable="false" 
						role="tab" 
						(click)="selectTab($event, tab)" 
						(focus)="onTabFocus($event, i)"
						[attr.aria-selected]="tab.active"
						[attr.tabindex]="tab.active?0:-1"
						[ngClass]="{'active-tab': tab.active, 'disabled-tab': tab.disabled}">
						<span *ngIf="!tab.headingIsTemplate">
							{{tab.heading}}
						</span>
						<template 
							*ngIf="tab.headingIsTemplate" 
							[ngTemplateOutlet]="tab.heading">
						</template>
					</a>
				</li>
			</ul>
			<button 
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
	private isOverFlow = false;
	private firstVisibleTab = 0;
	private scrollLength = 0;
	private allTabHeading;
	private disabledRightArrow = false;
	private disabledLeftArrow = true;
	private currentSelectedTab: number;
	private isTouching: boolean;
	private prevClientX: number;

	private scrollLeft = 0;

	@Input() tabs: QueryList<Tab>;
	@ViewChild("tabList") tabHeading;

	// keyboard accessibility
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		if (event.keyCode === KeyCodes.RIGHT_ARROW || event.keyCode === KeyCodes.DOWN_ARROW) {
			if (this.currentSelectedTab < this.allTabHeading.length - 1) {
				event.preventDefault();
				this.allTabHeading[this.currentSelectedTab + 1].focus();
			}
		}
		if (event.keyCode === KeyCodes.LEFT_ARROW || event.keyCode === KeyCodes.UP_ARROW) {
			if (this.currentSelectedTab > 0) {
				event.preventDefault();
				this.allTabHeading[this.currentSelectedTab - 1].focus();
			}
		}
	}

	// TODO
	// draggable
	@HostListener("touchstart", ["$event"])
	onTouchStart(event) {
		this.isTouching = true;
		this.prevClientX = event.touches[0].clientX;
	}

	@HostListener("touchend", ["$event"])
	onTouchEnd(event) {
		this.isTouching = false;
		if (this.isOverFlow) {
			// return to the leftmost resting place
			if (this.scrollLeft > 0) {
				this.scrollLeft = 0;
			}
			// return to the rightmost resting place
			if (this.scrollLength + this.scrollLeft <= this.tabHeading.nativeElement.parentElement.offsetWidth) {
				this.scrollLeft = -(this.scrollLength - this.tabHeading.nativeElement.parentElement.offsetWidth + 40);
			}
			this.updateOverflowButtons();
		}
	}

	@HostListener("touchmove", ["$event"])
	onTouchMove(event) {
		let touch = event.touches[0];
		if (this.isOverFlow && this.isTouching) {
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
		this.allTabHeading = this.tabHeading.nativeElement.querySelectorAll("li a");
	}

	private onTabFocus(ev, index: number) {
		this.currentSelectedTab = index;
		this.moveTabIntoView(ev.target);
		// reset scroll left because we're already handling it
		this.tabHeading.nativeElement.parentElement.scrollLeft = 0;
	}

	private scrollCheck() {
		if (this.tabHeading.nativeElement.offsetWidth > this.tabHeading.nativeElement.parentElement.offsetWidth) {
			this.isOverFlow = true;
			this.disabledRightArrow = false;
			this.scrollLength = this.tabHeading.nativeElement.offsetWidth;
		} else {
			this.isOverFlow = false;
		}
	}

	private goLeft() {
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
			let visibleTab = this.allTabHeading[this.firstVisibleTab];
			// where 35 === the button width + the tab padding
			this.scrollLeft = -(visibleTab.offsetLeft - 35);
		}
	}

	private goRight() {
		if (this.disabledRightArrow) {
			return;
		}

		if (this.disabledLeftArrow) {
			this.disabledLeftArrow = false;
		}

		if (this.firstVisibleTab < this.allTabHeading.length - 1) {
			let visibleTab = this.allTabHeading[this.firstVisibleTab];
			this.scrollLeft = -(visibleTab.offsetLeft + visibleTab.offsetWidth - 15);
			this.firstVisibleTab++;
			if (this.scrollLength + this.scrollLeft <= this.tabHeading.nativeElement.parentElement.offsetWidth) {
				this.disabledRightArrow = true;
				// 40 === the width of the left/right buttons
				this.scrollLeft = -(this.scrollLength - this.tabHeading.nativeElement.parentElement.offsetWidth + 40);
			}
		}
	}

	private selectTab(ev, tab: Tab) {
		if (tab.disabled) {
			return;
		}

		this.tabs.forEach((_tab) => {
			_tab.active = false;
		});

		tab.active = true;

		this.moveTabIntoView(ev.target);
	}

	private moveTabIntoView(tab) {
		// if the target is behind the right edge move it into view
		if (tab.offsetLeft + tab.offsetWidth > this.tabHeading.nativeElement.parentElement.offsetWidth - (this.scrollLeft + 40)) {
			this.scrollLeft = -((tab.offsetLeft + tab.offsetWidth + 40) - this.tabHeading.nativeElement.parentElement.offsetWidth);
		}

		// if the target is scrolled behind the left edge move it into view
		if (tab.offsetLeft + this.scrollLeft < 0) {
			this.scrollLeft = -(tab.offsetLeft - 35);
		}
		this.updateOverflowButtons();
	}

	private findFirstVisibleTab() {
		for (let i = 0; i < this.allTabHeading.length; i++) {
			// find the first tab that isn't behind the left edge
			if (this.allTabHeading[i].offsetLeft + this.scrollLeft > 0) {
				return i;
			}
		}
	}

	private updateOverflowButtons() {
		this.firstVisibleTab = this.findFirstVisibleTab();
		if (this.firstVisibleTab > 0) {
			this.disabledLeftArrow = false;
		} else {
			this.disabledLeftArrow = true;
		}
		if (this.scrollLength + this.scrollLeft <= this.tabHeading.nativeElement.parentElement.offsetWidth) {
			this.disabledRightArrow = true;
		}
	}
}
