import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

/**
 * `TabsVerticalGrouped` is the vertical-orientation counterpart of the
 * "tab-header-group" composition pattern. It is a thin wrapper that
 * supplies the layout context (`cds--css-grid` and an explicit height).
 *
 * ```html
 * <cds-tabs-vertical-grouped height="400px">
 *   <cds-tab-header-group-vertical>
 *     <cds-tab-header [paneReference]="content1">Dashboard</cds-tab-header>
 *     <cds-tab-header [paneReference]="content2"
 *       secondaryLabel="(21/25)" [dismissable]="true">
 *       Monitoring
 *     </cds-tab-header>
 *   </cds-tab-header-group-vertical>
 *
 *   <cds-tab #content1>Tab Content 1</cds-tab>
 *   <cds-tab #content2>Tab Content 2</cds-tab>
 * </cds-tabs-vertical-grouped>
 * ```
 */
@Component({
	selector: "cds-tabs-vertical-grouped, ibm-tabs-vertical-grouped",
	template: `<ng-content />`,
	standalone: true
})
export class TabsVerticalGrouped {
	/**
	 * **Optional**: explicit height for the vertical tab list container. Accepts
	 * any valid CSS height value.
	 */
	@Input() height: string;

	@HostBinding("class.cds--css-grid") cssGridClass = true;

	@HostBinding("style.height") get hostHeight() {
		return this.height || null;
	}
}
