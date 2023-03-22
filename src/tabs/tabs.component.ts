import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ContentChild,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";

/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * [See demo](../../?path=/story/components-tabs--basic)
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <cds-tabs>
 * 	<cds-tab heading='tab1'>
 * 		tab 1 content
 * 	</cds-tab>
 * 	<cds-tab heading='tab1'>
 * 		tab 2 content
 * 	</cds-tab>
 * 	<!-- ... -->
 * 	<cds-tab heading='tab1'>
 * 		tab n content
 * 	</cds-tab>
 * </cds-tabs>
 * ```
 */
@Component({
	selector: "cds-tabs, ibm-tabs",
	template: `
		<ng-container *ngIf="skeleton">
			<cds-tabs-skeleton></cds-tabs-skeleton>
		</ng-container>
		<ng-container *ngIf="!skeleton">
			<cds-tab-headers
				*ngIf="hasTabHeaders() && position === 'top'"
				[theme]="theme"
				[tabs]="tabs"
				[followFocus]="followFocus"
				[cacheActive]="cacheActive"
				[contentBefore]="before"
				[contentAfter]="after"
				[ariaLabel]="ariaLabel"
				[ariaLabelledby]="ariaLabelledby"
				[type]="type">
			</cds-tab-headers>
			<ng-content></ng-content>
			<ng-template #before>
				<ng-content select="[before]"></ng-content>
			</ng-template>
			<ng-template #after>
				<ng-content select="[after]"></ng-content>
			</ng-template>
			<cds-tab-headers
				*ngIf="hasTabHeaders() && position === 'bottom'"
				[tabs]="tabs"
				[cacheActive]="cacheActive"
				[type]="type">
			</cds-tab-headers>
		</ng-container>
	`
})
export class Tabs implements AfterContentInit, OnChanges {
	/**
	 * Takes either the string value 'top' or 'bottom' to place TabHeader
	 * relative to the `TabPanel`s.
	 */
	@Input() position: "top" | "bottom" = "top";
	/**
	 * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus = true;
	/**
	 * Set to `true` to have the tabIndex of the all tabpanels be -1.
	 */
	@Input() isNavigation = false;
	/**
	 * Sets the aria label on the `TabHeader`s nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the `TabHeader`s nav element.
	 */
	@Input() ariaLabelledby: string;
	/**
	 * Sets the type of the `TabHeader`s
	 */
	@Input() type: "line" | "contained" = "line";
	/**
	 * Sets the theme of `TabHeader`s
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Set state of tabs to skeleton
	 */
	@Input() skeleton = false;

	/**
	 * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
	 */
	@ContentChildren(Tab, { descendants: false }) tabs: QueryList<Tab>;
	/**
	 * Content child of the projected header component
	 */
	@ContentChild(TabHeaders) tabHeaders;

	/**
	 * After content is initialized update `Tab`s to cache (if turned on) and set the initial
	 * selected Tab item.
	 */
	ngAfterContentInit() {
		if (this.tabHeaders) {
			this.tabHeaders.cacheActive = this.cacheActive;
		}

		this.tabs.forEach(tab => {
			tab.tabIndex = this.isNavigation ? null : 0;
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.tabHeaders && changes.cacheActive) {
			this.tabHeaders.cacheActive = this.cacheActive;
		}

		if (this.tabs && changes.isNavigation) {
			this.tabs.forEach(tab => {
				tab.tabIndex = this.isNavigation ? null : 0;
			});
		}
	}

	/**
	 * true if the n-tab's are passed directly to the component as children
	 */
	hasTabHeaders() {
		return this.tabs.length > 0;
	}
}
