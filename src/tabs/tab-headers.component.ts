import {
	Component,
	QueryList,
	Input,
	HostListener,
	ViewChild,
	ContentChildren,
	AfterContentInit,
	ViewChildren,
	ElementRef
} from "@angular/core";

import { Tab } from "./tab.component";


/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
@Component({
	selector: "ibm-tab-headers",
	template: `
		<nav
			class="bx--tabs"
			[ngClass]="{
				'bx--skeleton': skeleton
			}"
			role="navigation">
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
						#tabItem
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
							[ngTemplateOutlet]="tab.heading"
							[ngTemplateOutletContext]="{$implicit: tab.context}">
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

export class TabHeaders implements AfterContentInit {
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
	 * Set to `true` to put tabs in a loading state.
	 */
	@Input() skeleton = false;

	/**
	 * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
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
	 */
	public firstVisibleTab = 0;
	/**
	 * The DOM element containing the `Tab` headings displayed.
	 */
	@ViewChildren("tabItem") allTabHeaders: QueryList<ElementRef>;
	/**
	 * Controls the manual focusing done by tabbing through headings.
	 */
	public currentSelectedTab: number;
	public tabListVisible = false;

	// keyboard accessibility
	/**
	 * Controls the keydown events used for tabbing through the headings.
	 */
	@HostListener("keydown", ["$event"])
	keyboardInput(event) {
		let tabsArray = Array.from<any>(this.tabs);

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

	/**
	 * Controls manually focusing tabs.
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
