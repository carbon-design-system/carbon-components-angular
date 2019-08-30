/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, QueryList, Input, HostListener, ViewChild, ContentChildren, ViewChildren } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 */
export class TabHeaders {
    constructor() {
        /**
         * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
         * Duplicate from `n-tabs` to support standalone headers
         */
        this.cacheActive = false;
        /**
         * Set to `true` to put tabs in a loading state.
         */
        this.skeleton = false;
        /**
         * The index of the first visible tab.
         */
        this.firstVisibleTab = 0;
        this.tabListVisible = false;
    }
    /**
     * Controls the keydown events used for tabbing through the headings.
     * @param {?} event
     * @return {?}
     */
    keyboardInput(event) {
        /** @type {?} */
        let tabsArray = Array.from(this.tabs);
        // "Right" is an ie11 specific value
        if (event.key === "Right" || event.key === "ArrowRight") {
            if (this.currentSelectedTab < this.allTabHeaders.length - 1) {
                event.preventDefault();
                if (this.followFocus) {
                    this.selectTab(event.target, tabsArray[this.currentSelectedTab + 1], this.currentSelectedTab);
                }
                this.allTabHeaders.toArray()[this.currentSelectedTab + 1].nativeElement.focus();
            }
            else {
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
            }
            else {
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
    /**
     * @param {?} event
     * @return {?}
     */
    focusOut(event) {
        if (this.tabListVisible && event.relatedTarget === null) {
            this.tabListVisible = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.tabInput) {
            this.tabs = this.tabQuery;
        }
        else {
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
     * @param {?} ref
     * @param {?} index
     * @return {?}
     */
    onTabFocus(ref, index) {
        this.currentSelectedTab = index;
        // reset scroll left because we're already handling it
        this.headerContainer.nativeElement.parentElement.scrollLeft = 0;
    }
    /**
     * @return {?}
     */
    getSelectedTab() {
        /** @type {?} */
        const selected = this.tabs.find(tab => tab.active);
        if (selected) {
            return selected;
        }
        return { headingIsTemplate: false, heading: "" };
    }
    /**
     * @return {?}
     */
    showTabList() {
        this.tabListVisible = true;
    }
    /**
     * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
     * @param {?} ref
     * @param {?} tab
     * @param {?} tabIndex
     * @return {?}
     */
    selectTab(ref, tab, tabIndex) {
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
     * @return {?}
     */
    setFirstTab() {
        setTimeout(() => {
            /** @type {?} */
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
TabHeaders.decorators = [
    { type: Component, args: [{
                selector: "ibm-tab-headers",
                template: `
		<nav
			class="bx--tabs"
			[ngClass]="{
				'bx--skeleton': skeleton
			}"
			role="navigation"
			[attr.aria-label]="ariaLabel"
			[attr.aria-labelledby]="ariaLabelledby">
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
				<li role="presentation">
					<ng-container *ngIf="contentBefore" [ngTemplateOutlet]="contentBefore"></ng-container>
				</li>
				<li
					*ngFor="let tab of tabs; let i = index;"
					[ngClass]="{
						'bx--tabs__nav-item--selected': tab.active,
						'bx--tabs__nav-item--disabled': tab.disabled
					}"
					class="bx--tabs__nav-item"
					role="presentation"
					(click)="selectTab(tabItem, tab, i)">
					<a
						#tabItem
						[attr.aria-selected]="tab.active"
						[attr.tabindex]="(tab.active?0:-1)"
						[attr.aria-controls]="tab.id"
						(focus)="onTabFocus(tabItem, i)"
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
				<li role="presentation">
					<ng-container *ngIf="contentAfter" [ngTemplateOutlet]="contentAfter"></ng-container>
				</li>
			</ul>
		</nav>
	 `
            }] }
];
TabHeaders.propDecorators = {
    tabInput: [{ type: Input, args: ["tabs",] }],
    cacheActive: [{ type: Input }],
    followFocus: [{ type: Input }],
    skeleton: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledby: [{ type: Input }],
    contentBefore: [{ type: Input }],
    contentAfter: [{ type: Input }],
    headerContainer: [{ type: ViewChild, args: ["tabList",] }],
    tabQuery: [{ type: ContentChildren, args: [Tab,] }],
    allTabHeaders: [{ type: ViewChildren, args: ["tabItem",] }],
    keyboardInput: [{ type: HostListener, args: ["keydown", ["$event"],] }],
    focusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};
function TabHeaders_tsickle_Closure_declarations() {
    /**
     * List of `Tab` components.
     * @type {?}
     */
    TabHeaders.prototype.tabInput;
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * Duplicate from `n-tabs` to support standalone headers
     * @type {?}
     */
    TabHeaders.prototype.cacheActive;
    /**
     * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
     * @type {?}
     */
    TabHeaders.prototype.followFocus;
    /**
     * Set to `true` to put tabs in a loading state.
     * @type {?}
     */
    TabHeaders.prototype.skeleton;
    /**
     * Sets the aria label on the nav element.
     * @type {?}
     */
    TabHeaders.prototype.ariaLabel;
    /**
     * Sets the aria labelledby on the nav element.
     * @type {?}
     */
    TabHeaders.prototype.ariaLabelledby;
    /** @type {?} */
    TabHeaders.prototype.contentBefore;
    /** @type {?} */
    TabHeaders.prototype.contentAfter;
    /**
     * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
     * @type {?}
     */
    TabHeaders.prototype.headerContainer;
    /**
     * ContentChild of all the n-tabs
     * @type {?}
     */
    TabHeaders.prototype.tabQuery;
    /**
     * set to tabQuery if tabInput is empty
     * @type {?}
     */
    TabHeaders.prototype.tabs;
    /**
     * The index of the first visible tab.
     * @type {?}
     */
    TabHeaders.prototype.firstVisibleTab;
    /**
     * The DOM element containing the `Tab` headings displayed.
     * @type {?}
     */
    TabHeaders.prototype.allTabHeaders;
    /**
     * Controls the manual focusing done by tabbing through headings.
     * @type {?}
     */
    TabHeaders.prototype.currentSelectedTab;
    /** @type {?} */
    TabHeaders.prototype.tabListVisible;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRhYnMvdGFiLWhlYWRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFnRnRDLE1BQU07Ozs7OzsyQkFXa0IsS0FBSzs7Ozt3QkFRUixLQUFLOzs7OytCQTRCQSxDQUFDOzhCQVNGLEtBQUs7Ozs7Ozs7SUFPN0IsYUFBYSxDQUFDLEtBQUs7O1FBQ2xCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUczQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssWUFBWSxFQUFFO1lBQ3hELElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUM5RjtnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRVI7YUFDRjs7O3VCQVFDLEtBQUssU0FBQyxNQUFNOzBCQUtaLEtBQUs7MEJBSUwsS0FBSzt1QkFJTCxLQUFLO3dCQUlMLEtBQUs7NkJBSUwsS0FBSzs0QkFFTCxLQUFLOzJCQUNMLEtBQUs7OEJBS0wsU0FBUyxTQUFDLFNBQVM7dUJBSW5CLGVBQWUsU0FBQyxHQUFHOzRCQVluQixZQUFZLFNBQUMsU0FBUzs0QkFXdEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1QkE0RGxDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdFF1ZXJ5TGlzdCxcblx0SW5wdXQsXG5cdEhvc3RMaXN0ZW5lcixcblx0Vmlld0NoaWxkLFxuXHRDb250ZW50Q2hpbGRyZW4sXG5cdEFmdGVyQ29udGVudEluaXQsXG5cdFZpZXdDaGlsZHJlbixcblx0RWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwiLi90YWIuY29tcG9uZW50XCI7XG5cblxuLyoqXG4gKiBUaGUgYFRhYkhlYWRlcnNgIGNvbXBvbmVudCBjb250YWlucyB0aGUgYFRhYmAgaXRlbXMgYW5kIGNvbnRyb2xzIHNjcm9sbCBmdW5jdGlvbmFsaXR5XG4gKiBpZiBjb250ZW50IGhhcyBvdmVyZmxvdy5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10YWItaGVhZGVyc1wiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuYXZcblx0XHRcdGNsYXNzPVwiYngtLXRhYnNcIlxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHQnYngtLXNrZWxldG9uJzogc2tlbGV0b25cblx0XHRcdH1cIlxuXHRcdFx0cm9sZT1cIm5hdmlnYXRpb25cIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXRhYnMtdHJpZ2dlclwiIHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJzaG93VGFiTGlzdCgpXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ4LS10YWJzLXRyaWdnZXItdGV4dFwiIHRhYmluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWdldFNlbGVjdGVkVGFiKCkuaGVhZGluZ0lzVGVtcGxhdGVcIj5cblx0XHRcdFx0XHRcdHt7IGdldFNlbGVjdGVkVGFiKCkuaGVhZGluZyB9fVxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0Km5nSWY9XCJnZXRTZWxlY3RlZFRhYigpLmhlYWRpbmdJc1RlbXBsYXRlXCJcblx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImdldFNlbGVjdGVkVGFiKCkuaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNVwiIHZpZXdCb3g9XCIwIDAgMTAgNVwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMCAwbDUgNC45OThMMTAgMHpcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHVsXG5cdFx0XHRcdCN0YWJMaXN0XG5cdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHQnYngtLXRhYnNfX25hdi0taGlkZGVuJzogIXRhYkxpc3RWaXNpYmxlXG5cdFx0XHRcdH1cIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS10YWJzX19uYXZcIlxuXHRcdFx0XHRyb2xlPVwidGFibGlzdFwiPlxuXHRcdFx0XHQ8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50QmVmb3JlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudEJlZm9yZVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXg7XCJcblx0XHRcdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdFx0XHQnYngtLXRhYnNfX25hdi1pdGVtLS1zZWxlY3RlZCc6IHRhYi5hY3RpdmUsXG5cdFx0XHRcdFx0XHQnYngtLXRhYnNfX25hdi1pdGVtLS1kaXNhYmxlZCc6IHRhYi5kaXNhYmxlZFxuXHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLXRhYnNfX25hdi1pdGVtXCJcblx0XHRcdFx0XHRyb2xlPVwicHJlc2VudGF0aW9uXCJcblx0XHRcdFx0XHQoY2xpY2spPVwic2VsZWN0VGFiKHRhYkl0ZW0sIHRhYiwgaSlcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0I3RhYkl0ZW1cblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLmFjdGl2ZVwiXG5cdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCIodGFiLmFjdGl2ZT8wOi0xKVwiXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWNvbnRyb2xzXT1cInRhYi5pZFwiXG5cdFx0XHRcdFx0XHQoZm9jdXMpPVwib25UYWJGb2N1cyh0YWJJdGVtLCBpKVwiXG5cdFx0XHRcdFx0XHRkcmFnZ2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRpZD1cInt7dGFiLmlkfX0taGVhZGVyXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLXRhYnNfX25hdi1saW5rXCJcblx0XHRcdFx0XHRcdGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuXHRcdFx0XHRcdFx0cm9sZT1cInRhYlwiPlxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0YWIuaGVhZGluZ0lzVGVtcGxhdGVcIj5cblx0XHRcdFx0XHRcdFx0e3sgdGFiLmhlYWRpbmcgfX1cblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRcdCpuZ0lmPVwidGFiLmhlYWRpbmdJc1RlbXBsYXRlXCJcblx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLmhlYWRpbmdcIlxuXHRcdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGFiLmNvbnRleHR9XCI+XG5cdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudEFmdGVyXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudEFmdGVyXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvbmF2PlxuXHQgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRhYkhlYWRlcnMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0LyoqXG5cdCAqIExpc3Qgb2YgYFRhYmAgY29tcG9uZW50cy5cblx0ICovXG5cdC8vIGRpc2FibGUgdGhlIG5leHQgbGluZSBiZWNhdXNlIHdlIG5lZWQgdG8gcmVuYW1lIHRoZSBpbnB1dFxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcblx0QElucHV0KFwidGFic1wiKSB0YWJJbnB1dDogUXVlcnlMaXN0PFRhYj47XG5cdC8qKlxuXHQgKiBTZXQgdG8gJ3RydWUnIHRvIGhhdmUgYFRhYmAgaXRlbXMgY2FjaGVkIGFuZCBub3QgcmVsb2FkZWQgb24gdGFiIHN3aXRjaGluZy5cblx0ICogRHVwbGljYXRlIGZyb20gYG4tdGFic2AgdG8gc3VwcG9ydCBzdGFuZGFsb25lIGhlYWRlcnNcblx0ICovXG5cdEBJbnB1dCgpIGNhY2hlQWN0aXZlID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXQgdG8gJ3RydWUnIHRvIGhhdmUgdGFicyBhdXRvbWF0aWNhbGx5IGFjdGl2YXRlZCBhbmQgaGF2ZSB0aGVpciBjb250ZW50IGRpc3BsYXllZCB3aGVuIHRoZXkgcmVjZWl2ZSBmb2N1cy5cblx0ICovXG5cdEBJbnB1dCgpIGZvbGxvd0ZvY3VzOiBib29sZWFuO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBwdXQgdGFicyBpbiBhIGxvYWRpbmcgc3RhdGUuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvbiB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblx0LyoqXG5cdCAqIFNldHMgdGhlIGFyaWEgbGFiZWxsZWRieSBvbiB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIGNvbnRlbnRCZWZvcmU7XG5cdEBJbnB1dCgpIGNvbnRlbnRBZnRlcjtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgVW5vcmRlcmVkIExpc3QgZWxlbWVudCB0aGF0IGhvbGRzIHRoZSBgVGFiYCBoZWFkaW5ncyBmcm9tIHRoZSB2aWV3IERPTS5cblx0ICovXG5cdEBWaWV3Q2hpbGQoXCJ0YWJMaXN0XCIpIGhlYWRlckNvbnRhaW5lcjtcblx0LyoqXG5cdCAqIENvbnRlbnRDaGlsZCBvZiBhbGwgdGhlIG4tdGFic1xuXHQgKi9cblx0QENvbnRlbnRDaGlsZHJlbihUYWIpIHRhYlF1ZXJ5OiBRdWVyeUxpc3Q8VGFiPjtcblx0LyoqXG5cdCAqIHNldCB0byB0YWJRdWVyeSBpZiB0YWJJbnB1dCBpcyBlbXB0eVxuXHQgKi9cblx0cHVibGljIHRhYnM6IFF1ZXJ5TGlzdDxUYWI+O1xuXHQvKipcblx0ICogVGhlIGluZGV4IG9mIHRoZSBmaXJzdCB2aXNpYmxlIHRhYi5cblx0ICovXG5cdHB1YmxpYyBmaXJzdFZpc2libGVUYWIgPSAwO1xuXHQvKipcblx0ICogVGhlIERPTSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGBUYWJgIGhlYWRpbmdzIGRpc3BsYXllZC5cblx0ICovXG5cdEBWaWV3Q2hpbGRyZW4oXCJ0YWJJdGVtXCIpIGFsbFRhYkhlYWRlcnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblx0LyoqXG5cdCAqIENvbnRyb2xzIHRoZSBtYW51YWwgZm9jdXNpbmcgZG9uZSBieSB0YWJiaW5nIHRocm91Z2ggaGVhZGluZ3MuXG5cdCAqL1xuXHRwdWJsaWMgY3VycmVudFNlbGVjdGVkVGFiOiBudW1iZXI7XG5cdHB1YmxpYyB0YWJMaXN0VmlzaWJsZSA9IGZhbHNlO1xuXG5cdC8vIGtleWJvYXJkIGFjY2Vzc2liaWxpdHlcblx0LyoqXG5cdCAqIENvbnRyb2xzIHRoZSBrZXlkb3duIGV2ZW50cyB1c2VkIGZvciB0YWJiaW5nIHRocm91Z2ggdGhlIGhlYWRpbmdzLlxuXHQgKi9cblx0QEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuXHRrZXlib2FyZElucHV0KGV2ZW50KSB7XG5cdFx0bGV0IHRhYnNBcnJheSA9IEFycmF5LmZyb208YW55Pih0aGlzLnRhYnMpO1xuXG5cdFx0Ly8gXCJSaWdodFwiIGlzIGFuIGllMTEgc3BlY2lmaWMgdmFsdWVcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIlJpZ2h0XCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudFNlbGVjdGVkVGFiIDwgdGhpcy5hbGxUYWJIZWFkZXJzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKHRoaXMuZm9sbG93Rm9jdXMpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdFRhYihldmVudC50YXJnZXQsIHRhYnNBcnJheVt0aGlzLmN1cnJlbnRTZWxlY3RlZFRhYiArIDFdLCB0aGlzLmN1cnJlbnRTZWxlY3RlZFRhYik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hbGxUYWJIZWFkZXJzLnRvQXJyYXkoKVt0aGlzLmN1cnJlbnRTZWxlY3RlZFRhYiArIDFdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmICh0aGlzLmZvbGxvd0ZvY3VzKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RUYWIoZXZlbnQudGFyZ2V0LCB0YWJzQXJyYXlbMF0sIDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuYWxsVGFiSGVhZGVycy5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gXCJMZWZ0XCIgaXMgYW4gaWUxMSBzcGVjaWZpYyB2YWx1ZVxuXHRcdGlmIChldmVudC5rZXkgPT09IFwiTGVmdFwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudFNlbGVjdGVkVGFiID4gMCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRpZiAodGhpcy5mb2xsb3dGb2N1cykge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0VGFiKGV2ZW50LnRhcmdldCwgdGFic0FycmF5W3RoaXMuY3VycmVudFNlbGVjdGVkVGFiIC0gMV0sIHRoaXMuY3VycmVudFNlbGVjdGVkVGFiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmFsbFRhYkhlYWRlcnMudG9BcnJheSgpW3RoaXMuY3VycmVudFNlbGVjdGVkVGFiIC0gMV0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKHRoaXMuZm9sbG93Rm9jdXMpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdFRhYihldmVudC50YXJnZXQsIHRhYnNBcnJheVt0aGlzLmFsbFRhYkhlYWRlcnMubGVuZ3RoIC0gMV0sIHRoaXMuYWxsVGFiSGVhZGVycy5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuYWxsVGFiSGVhZGVycy50b0FycmF5KClbdGhpcy5hbGxUYWJIZWFkZXJzLmxlbmd0aCAtIDFdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkhvbWVcIikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICh0aGlzLmZvbGxvd0ZvY3VzKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0VGFiKGV2ZW50LnRhcmdldCwgdGFic0FycmF5WzBdLCAwKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWxsVGFiSGVhZGVycy50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5rZXkgPT09IFwiRW5kXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGhpcy5mb2xsb3dGb2N1cykge1xuXHRcdFx0XHR0aGlzLnNlbGVjdFRhYihldmVudC50YXJnZXQsIHRhYnNBcnJheVt0aGlzLmFsbFRhYkhlYWRlcnMubGVuZ3RoIC0gMV0sIHRoaXMuYWxsVGFiSGVhZGVycy5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hbGxUYWJIZWFkZXJzLnRvQXJyYXkoKVt0aGlzLmFsbFRhYkhlYWRlcnMubGVuZ3RoIC0gMV0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblxuXHRcdC8vIGBcIlNwYWNlYmFyXCJgIGlzIElFMTEgc3BlY2lmaWMgdmFsdWVcblx0XHRpZiAoKGV2ZW50LmtleSA9PT0gXCIgXCIgfHwgZXZlbnQua2V5ID09PSBcIlNwYWNlYmFyXCIpICYmICF0aGlzLmZvbGxvd0ZvY3VzKSB7XG5cdFx0XHR0aGlzLnNlbGVjdFRhYihldmVudC50YXJnZXQsIHRhYnNBcnJheVt0aGlzLmN1cnJlbnRTZWxlY3RlZFRhYl0sIHRoaXMuY3VycmVudFNlbGVjdGVkVGFiKTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuXHRmb2N1c091dChldmVudCkge1xuXHRcdGlmICh0aGlzLnRhYkxpc3RWaXNpYmxlICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudGFiTGlzdFZpc2libGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0aWYgKCF0aGlzLnRhYklucHV0KSB7XG5cdFx0XHR0aGlzLnRhYnMgPSB0aGlzLnRhYlF1ZXJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRhYnMgPSB0aGlzLnRhYklucHV0O1xuXHRcdH1cblxuXHRcdHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2FjaGVBY3RpdmUgPSB0aGlzLmNhY2hlQWN0aXZlKTtcblx0XHR0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRGaXJzdFRhYigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc2V0Rmlyc3RUYWIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250cm9scyBtYW51YWxseSBmb2N1c2luZyB0YWJzLlxuXHQgKi9cblx0cHVibGljIG9uVGFiRm9jdXMocmVmOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlcikge1xuXHRcdHRoaXMuY3VycmVudFNlbGVjdGVkVGFiID0gaW5kZXg7XG5cdFx0Ly8gcmVzZXQgc2Nyb2xsIGxlZnQgYmVjYXVzZSB3ZSdyZSBhbHJlYWR5IGhhbmRsaW5nIGl0XG5cdFx0dGhpcy5oZWFkZXJDb250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuXHR9XG5cblx0cHVibGljIGdldFNlbGVjdGVkVGFiKCk6IGFueSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnRhYnMuZmluZCh0YWIgPT4gdGFiLmFjdGl2ZSk7XG5cdFx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdFx0fVxuXHRcdHJldHVybiB7aGVhZGluZ0lzVGVtcGxhdGU6IGZhbHNlLCBoZWFkaW5nOiBcIlwifTtcblx0fVxuXG5cdHB1YmxpYyBzaG93VGFiTGlzdCgpIHtcblx0XHR0aGlzLnRhYkxpc3RWaXNpYmxlID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWxlY3RzIGBUYWJgICd0YWInIGFuZCBtb3ZlcyBpdCBpbnRvIHZpZXcgb24gdGhlIHZpZXcgRE9NIGlmIGl0IGlzIG5vdCBhbHJlYWR5LlxuXHQgKi9cblx0cHVibGljIHNlbGVjdFRhYihyZWY6IEhUTUxFbGVtZW50LCB0YWI6IFRhYiwgdGFiSW5kZXg6IG51bWJlcikge1xuXHRcdGlmICh0YWIuZGlzYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBoaWRlIHRoZSB0YWJsaXN0IG9uIG1vYmlsZVxuXHRcdHRoaXMudGFiTGlzdFZpc2libGUgPSBmYWxzZTtcblx0XHR0aGlzLmN1cnJlbnRTZWxlY3RlZFRhYiA9IHRhYkluZGV4O1xuXHRcdHRoaXMudGFicy5mb3JFYWNoKF90YWIgPT4gX3RhYi5hY3RpdmUgPSBmYWxzZSk7XG5cdFx0dGFiLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGFiLmRvU2VsZWN0KCk7XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyB3aGljaCBgVGFiYCBpcyBpbml0aWFsbHkgc2VsZWN0ZWQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgc2V0Rmlyc3RUYWIoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsZXQgZmlyc3RUYWIgPSB0aGlzLnRhYnMuZmluZCh0YWIgPT4gdGFiLmFjdGl2ZSk7XG5cdFx0XHRpZiAoIWZpcnN0VGFiICYmIHRoaXMudGFicy5maXJzdCkge1xuXHRcdFx0XHRmaXJzdFRhYiA9IHRoaXMudGFicy5maXJzdDtcblx0XHRcdFx0Zmlyc3RUYWIuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdFRhYikge1xuXHRcdFx0XHRmaXJzdFRhYi5kb1NlbGVjdCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=