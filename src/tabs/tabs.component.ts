import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ContentChild,
	Query
} from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";


/**
 * Build out your application's tabs using this neutrino component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * `Tabs` expects a set of `n-tab` elements
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
			<n-tab-headers
				*ngIf="hasTabHeaders() && position === 'top'"
				[tabs]="tabs"
				[cacheActive]="cacheActive">
			</n-tab-headers>
			<ng-content></ng-content>
			<n-tab-headers
				*ngIf="hasTabHeaders() && position === 'bottom'"
				[tabs]="tabs"
				[cacheActive]="cacheActive">
			</n-tab-headers>
	 `
})
export class Tabs implements AfterContentInit {
	/**
	 * Takes either the string value 'top' or 'bottom' to place TabHeader
	 * relative to the `TabPanel`s.
	 * @type string
	 * @memberof Tabs
	 */
	@Input() position: "top" | "bottom" = "top";
	/**
	 * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
	 * @memberof Tabs
	 */
	@Input() cacheActive = false;
	/**
	 * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
	 * @type {QueryList<Tab>}
	 * @memberof Tabs
	 */
	@ContentChildren(Tab, { descendants: false }) tabs: QueryList<Tab>;
	/**
	 * Content child of the projected header component
	 */
	@ContentChild(TabHeaders) tabHeaders;

	/**
	 * After content is initialized update `Tab`s to cache (if turned on) and set the inital
	 * selected Tab item.
	 * @memberof Tabs
	 */
	ngAfterContentInit() {
		if (this.tabHeaders) {
			this.tabHeaders.cacheActive = this.cacheActive;
		}
	}

	/**
	 * true if the n-tab's are passed directly to the component as children
	 */
	hasTabHeaders() {
		return this.tabs.length > 0;
	}
}
