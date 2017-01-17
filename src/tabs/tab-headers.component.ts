import {
	Component,
	QueryList,
	Input,
	HostListener,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ViewRef,
	ComponentRef,
	ChangeDetectorRef
} from "@angular/core";
import {debounce} from "lodash";

import { KeyCodes } from "../constant/keys";
import { CdlTab } from "./tab.component";

@Component({
	selector: "cdl-tab-headers",
	template: `
		<div [class.is-over-flow]="isOverFlow">
			<button class="left-arrow clear-button" [class.disabled]="disabledLeftArrow" (click)="goLeft()">
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
			<ul class="cdl-tab-heading" role="tablist" [ngStyle]="{'left.px':scrollLeft}">
				<li *ngFor="let tab of tabs; let i = index;">
					<a href="javascript:void(0)" draggable="false" role="tab" (click)="selectTab($event, tab)" (focus)="onTabFocus($event, i)"
						[ngClass]="{'active-tab': tab.active, 'disabled-tab': tab.disabled}">
						<span *ngIf="!tab.headingIsTemplate">{{tab.heading}}</span>
						<template *ngIf="tab.headingIsTemplate" [ngTemplateOutlet]="tab.heading">
						</template>
					</a>
				</li>
			</ul>
			<button class="right-arrow clear-button" [class.disabled]="disabledRightArrow"  (click)="goRight()">
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

export class CdlTabHeaders {
	private tabHeading;
	private isOverFlow = false;
	private firstVisibleTab = 0;
	private scrollLength = 0;
	private allTabHeading;
	private disabledRightArrow = false;
	private disabledLeftArrow = true;
	private currentSelectedTab: number;
	private isMousePress: boolean;
	private prevClientX: number;

	private scrollLeft = 0;

	@Input() tabs: QueryList<CdlTab>;

	// check for window resize
	@HostListener("window:resize", [])
	onResize = debounce(() => {
		this.scrollCheck();
	}, 100);

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
		this.isMousePress = true;
		this.prevClientX = event.clientX;
	}

	@HostListener("touchend", ["$event"])
	onTouchEnd(event) {
		this.isMousePress = false;
	}

	@HostListener("touchmove", ["$event"])
	onTouchMove(event) {
		if (this.isOverFlow && this.isMousePress) {
			if (event.clientX < this.prevClientX) {
				requestAnimationFrame(() => {
					this.tabHeading.scrollLeft -= event.clientX - this.prevClientX;
				});
				this.prevClientX = event.clientX;
			} else if (event.clientX > this.prevClientX) {
				requestAnimationFrame(() => {
					this.tabHeading.scrollLeft += 5;
				});
				this.prevClientX = event.clientX;
			}
		}
	}

	constructor(private _elementRef: ElementRef, private _viewContainerRef: ViewContainerRef, private _cdr: ChangeDetectorRef) {}

	ngOnInit() {
		// use viewrefs instead of querying the nativelement
		this.tabHeading = this._elementRef.nativeElement.querySelector("div ul");
	}

	ngAfterViewInit() {
		this.scrollCheck();
		// use viewrefs instead of querying the nativelement
		this.allTabHeading = this._elementRef.nativeElement.querySelectorAll("div ul li a");
	}

	private onTabFocus(ev, index: number) {
		this.currentSelectedTab = index;
		this.moveTabIntoView(ev.target);
		// reset scroll left because we're already handling it
		this.tabHeading.parentElement.scrollLeft = 0;
	}

	private scrollCheck() {
		if (this.tabHeading.offsetWidth > this.tabHeading.parentElement.offsetWidth) {
			this.isOverFlow = true;
			this.disabledRightArrow = false;

			setTimeout(() => {
				this.scrollLength = this.tabHeading.offsetWidth;
			});

			this._cdr.detectChanges();
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
			if (this.scrollLength + this.scrollLeft <= this.tabHeading.parentElement.offsetWidth) {
				this.disabledRightArrow = true;
				// 40 === the width of the left/right buttons
				this.scrollLeft = -(this.scrollLength - this.tabHeading.parentElement.offsetWidth + 40);
			}
		}
	}

	private selectTab(ev, tab: CdlTab) {
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
		if (tab.offsetLeft + tab.offsetWidth > this.tabHeading.parentElement.offsetWidth - (this.scrollLeft + 40)) {
			this.scrollLeft = -((tab.offsetLeft + tab.offsetWidth + 40) - this.tabHeading.parentElement.offsetWidth);
		}

		// if the target is scrolled behind the left edge move it into view
		if (tab.offsetLeft + this.scrollLeft < 0) {
			this.scrollLeft = -(tab.offsetLeft - 35);
		}
		this.firstVisibleTab = this.findFirstVisibleTab();
		if (this.firstVisibleTab > 0) {
			this.disabledLeftArrow = false;
		}
		if (this.scrollLength + this.scrollLeft <= this.tabHeading.parentElement.offsetWidth) {
			this.disabledRightArrow = true;
		}
	}

	private findFirstVisibleTab() {
		for (let i = 0; i < this.allTabHeading.length; i++) {
			// find the first tab that isn't behind the left edge
			if (this.allTabHeading[i].offsetLeft + this.scrollLeft > 0) {
				return i;
			}
		}
	}
}
