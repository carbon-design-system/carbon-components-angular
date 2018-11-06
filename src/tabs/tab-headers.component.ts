import {
	Component,
	QueryList,
	Input,
	HostListener,
	ViewChild,
	AfterViewInit,
	ContentChildren,
	AfterContentInit
} from "@angular/core";

import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

import { Tab } from "./tab.component";


/**
 * The `TabHeaders` neutrino component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
@Component({
	selector: "ibm-tab-headers",
	template: `
		<nav class="bx--tabs" role="navigation">
			<div class="bx--tabs-trigger" tabindex="0" (click)="showTabList()">
				<a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1">
					<ng-container *ngIf="!getSelectedTab().headingIsTemplate">
						{{ getSelectedTab().heading }}
					</ng-container>
					<ng-template
						*ngIf="getSelectedTab().headingIsTemplate"
						[ngTemplateOutlet]="getSelectedTab().heading">
					</ng-template>
				</a>
				<svg width="10" height="5" viewBox="0 0 10 5">
					<path d="M0 0l5 4.998L10 0z" fill-rule="evenodd"></path>
				</svg>
			</div>
			<ul
				#tabList
				[ngClass]="{
					'bx--tabs__nav--hidden': !tabListVisible
				}"
				class="bx--tabs__nav"
				role="tablist">
				<li
					*ngFor="let tab of tabs; let i = index;"
					[ngClass]="{
						'bx--tabs__nav-item--selected': tab.active
					}"
					class="bx--tabs__nav-item"
					role="presentation"
					(click)="selectTab(tabref, tab, i)">
					<a
						[attr.aria-selected]="tab.active"
						[attr.tabindex]="(tab.active?0:-1)"
						[attr.aria-controls]="tab.id"
						(focus)="onTabFocus(tabref, i)"
						draggable="false"
						id="{{tab.id}}-header"
						class="bx--tabs__nav-link"
						href="javascript:void(0)"
						role="tab">
						<ng-container *ngIf="!tab.headingIsTemplate">
							{{ tab.heading }}
						</ng-container>
						<ng-template
							*ngIf="tab.headingIsTemplate"
							[ngTemplateOutlet]="tab.heading">
						</ng-template>
					</a>
				</li>
			</ul>
		</nav>
		<div>
			<ng-content select="ibm-tab"></ng-content>
		</div>
	 `
})

export class TabHeaders implements AfterViewInit, AfterContentInit {
	/**
	 * List of `Tab` components.
	 * @type {QueryList<Tab>}
	 * @memberof TabHeaders
	 */
	// disable the next line because we need to rename the input
	// tslint:disable-next-line
	@Input("tabs") tabInput: QueryList<Tab>;
	/**
	 * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
	 * Duplicate from `n-tabs` to support standalone headers
	 * @memberof Tabs
	 */
	@Input() cacheActive = false;
	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
	 * @memberof TabHeaders
	 */
	@ViewChild("tabList") headerContainer;
	/**
	 * ContentChild of all the n-tabs
	 */
	@ContentChildren(Tab) tabQuery: QueryList<Tab>;
	/**
	 * set to tabQuery if tabInput is empty
	 */
	public tabs: QueryList<Tab>;
	/**
	 * The index of the first visible tab.
	 * @memberof TabHeaders
	 */
	public firstVisibleTab = 0;
	/**
	 * The DOM element containing the `Tab` headings displayed.
	 * @memberof TabHeaders
	 */
	public allTabHeaders;
	/**
	 * Controls the manual focusing done by tabbing through headings.
	 * @memberof TabHeaders
	 */
	public currentSelectedTab: number;
	public tabListVisible = false;

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
			} else {
				event.preventDefault();
				this.allTabHeaders[0].focus();
			}
		}

		if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			if (this.currentSelectedTab > 0) {
				event.preventDefault();
				this.allTabHeaders[this.currentSelectedTab - 1].focus();
			} else {
				event.preventDefault();
				this.allTabHeaders[this.allTabHeaders.length - 1].focus();
			}
		}
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
			// also update the tab headers list
			this.allTabHeaders = this.headerContainer.nativeElement.querySelectorAll("li a");
		});
		this.setFirstTab();
	}

	/**
	 * Performs check to see if there is overflow and needs scrolling.
	 * @memberof TabHeaders
	 */
	ngAfterViewInit() {
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
		// reset scroll left because we're already handling it
		this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
	}

	public getSelectedTab(): any {
		const selected = this.tabs.find(tab => tab.active);
		if (selected) {
			return selected;
		}
		return {headingIsTemplate: false, heading: ""};
	}

	public showTabList() {
		this.tabListVisible = true;
	}

	/**
	 * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
	 * @param ref
	 * @param tab
	 * @param tabIndex
	 * @memberof TabHeaders
	 */
	public selectTab(ref: HTMLElement, tab: Tab, tabIndex: number) {
		if (tab.disabled) {
			return;
		}

		// hide the tablist on mobile
		this.tabListVisible = false;
		this.currentSelectedTab = tabIndex;
		this.tabs.forEach(_tab => _tab.active = false);
		tab.active = true;
		tab.doSelect();
	}

	/**
	 * Determines which `Tab` is initially selected.
	 * @private
	 * @memberof Tabs
	 */
	private setFirstTab() {
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
