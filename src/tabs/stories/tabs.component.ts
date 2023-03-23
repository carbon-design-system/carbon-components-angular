import { Component, Input } from "@angular/core";

@Component({
	selector: "app-header-group",
	template: `
		<cds-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<button cdsTabHeader [paneReference]="content1">
				Content 1
			</button>
			<button cdsTabHeader [paneReference]="content2">
				Content 2
			</button>
			<button cdsTabHeader [paneReference]="content3" disabled="true">
				Content 3
			</button>
			<button cdsTabHeader [paneReference]="content4">
				Content 4
			</button>
			<button cdsTabHeader [paneReference]="content5">
				Content 5
			</button>
		</cds-tab-header-group>

		<cds-tab #content1>
			Tab Content 1
		</cds-tab>
		<cds-tab #content2>
			Tab Content 2
		</cds-tab>
		<cds-tab #content3>
			Tab Content 3
		</cds-tab>
		<cds-tab #content4>
			Tab Content 4
		</cds-tab>
		<cds-tab #content5>
			Tab Content 5
		</cds-tab>
	`
})
export class TabStory {
	@Input() skeleton = false;
	@Input() followFocus = true;
	@Input() cacheActive = false;
	@Input() isNavigation = true;
	@Input() type = "line";
}
