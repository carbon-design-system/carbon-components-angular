import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";

/**
 *  Build out your application's tabs using this neutrino component.
 *  This is the parent of the Tab and TabHeader components.
 *
 *
 * class: Tabs
 *
 * selector: `n-tabs`
 *
 *
 * Tabs expects a set of `n-tab` elements
 *
 * ```html
 * <n-tabs>
 * 	<n-tab heading='tab1'>
 * 		tab 1 content
 * 	</n-tab>
 * 	<n-tab heading='tab1'>
 * 		tab 2 content
 * 	</n-tab>
 * 	<!-- ... -->
 * 	<n-tab heading='tab1'>
 * 		tab n content
 * 	</n-tab>
 * </n-tabs>
 * ```
 *
 * @export
 * @class Tabs
 * @implements {AfterContentInit}
 */
@Component({
	selector: "n-tabs",
	template: `
			<n-tab-headers *ngIf="position === 'top'" [tabs]="tabs"></n-tab-headers>
			<div>
				<ng-content></ng-content>
			</div>
			<n-tab-headers *ngIf="position === 'bottom'" [tabs]="tabs"></n-tab-headers>
	 `
})

export class Tabs implements AfterContentInit {
	/**
	 *
	 * Maintains a QueryList of the Tab elements and updates if Tabs are added or removed.
	 * @type {QueryList<Tab>}
	 * @memberof Tabs
	 */
	@ContentChildren(Tab) tabs: QueryList<Tab>;

	/**
	 *
	 * Takes either the string value 'top' or 'bottom' to place TabHeader
	 * relative to the TabPanels.
	 * @type string
	 * @memberof Tabs
	 */
	@Input() position: "top" | "bottom" = "top";
	/**
	 * Turn on TabPanel caching for faster loading when switching tabs.
	 * @type boolean
	 * @memberof Tabs
	 */
	@Input() cacheActive = false;

	/**
	 * After content is initialize update Tabs to cache (if turned on) and set the inital
	 * selected Tab item.
	 * @memberof Tabs
	 */
	ngAfterContentInit() {
		this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);

		this.tabs.changes.subscribe(changes => {
			this.setFirstTab();
		});
		this.setFirstTab();
	}

	/**
	 * Method to determine which Tab is initially selected.
	 * @private
	 * @memberof Tabs
	 */
	private setFirstTab(): void {
		let firstTab = this.tabs.find(tab => tab.active);
		if (!firstTab && this.tabs.first) {
			firstTab = this.tabs.first;
			firstTab.active = true;
		}
		if (firstTab) {
			firstTab.doSelect();
		}
	}
}
