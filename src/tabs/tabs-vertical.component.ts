import {
	Component,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ContentChild,
	HostBinding,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeadersVertical } from "./tab-headers-vertical.component";
import { TabSkeleton } from "./tab-skeleton.component";

/**
 * `TabsVertical` is a vertical-orientation variant of `Tabs`. It expects a set
 * of `<cds-tab>` elements as children and renders the headers vertically.
 *
 * ```html
 * <cds-tabs-vertical>
 * 	<cds-tab heading='tab1'>tab 1 content</cds-tab>
 * 	<cds-tab heading='tab2'>tab 2 content</cds-tab>
 * </cds-tabs-vertical>
 * ```
 */
@Component({
	selector: "cds-tabs-vertical, ibm-tabs-vertical",
	template: `
		@if (skeleton) {
			<cds-tabs-skeleton [contained]="true" />
		}
		@if (!skeleton) {
			@if (hasTabHeaders()) {
				<cds-tab-headers-vertical
					[tabs]="tabs"
					[followFocus]="followFocus"
					[cacheActive]="cacheActive"
					[contentBefore]="before"
					[contentAfter]="after"
					[ariaLabel]="ariaLabel"
					[ariaLabelledby]="ariaLabelledby" />
			}
			<ng-content />
			<ng-template #before>
				<ng-content select="[before]" />
			</ng-template>
			<ng-template #after>
				<ng-content select="[after]" />
			</ng-template>
		}
	`,
	imports: [TabSkeleton, TabHeadersVertical]
})
export class TabsVertical implements AfterContentInit, OnChanges {
	@HostBinding("class.cds--css-grid") cssGridClass = true;
	@HostBinding("style.height") get hostHeight() {
		return this.height || null;
	}
	/**
	 * Set to `true` to have `Tab` items cached and not reloaded on tab switching.
	 */
	@Input() cacheActive = false;
	/**
	 * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
	 */
	@Input() followFocus = true;
	/**
	 * When `true`, sets each tab panel `tabindex` to `-1` for navigation-style usage.
	 */
	@Input() isNavigation = false;
	/**
	 * Sets the aria label on the `TabHeadersVertical`s nav element.
	 */
	@Input() ariaLabel: string;
	/**
	 * Sets the aria labelledby on the `TabHeadersVertical`s nav element.
	 */
	@Input() ariaLabelledby: string;
	/**
	 * **Optional**: explicit height for the vertical tab list container; accepts any
	 * valid CSS height value.
	 */
	@Input() height: string;
	/**
	 * When `true`, renders the tabs skeleton loading state.
	 */
	@Input() skeleton = false;

	/**
	 * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
	 */
	@ContentChildren(Tab, { descendants: false }) tabs: QueryList<Tab>;
	/**
	 * Content child of the projected header component.
	 */
	@ContentChild(TabHeadersVertical) tabHeaders;

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

	hasTabHeaders() {
		return this.tabs.length > 0;
	}
}
