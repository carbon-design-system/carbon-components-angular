import { Component, Input } from "@angular/core";

@Component({
	selector: "app-header-group",
	template: `
		<ibm-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<button ibmTabHeader [paneReference]="content1">
				Content 1
			</button>
			<button ibmTabHeader [paneReference]="content2">
				Content 2
			</button>
			<button ibmTabHeader [paneReference]="content3" disabled="true">
				Content 3
			</button>
			<button ibmTabHeader [paneReference]="content4">
				Content 4
			</button>
			<button ibmTabHeader [paneReference]="content5">
				Content 5
			</button>
		</ibm-tab-header-group>

		<ibm-tab #content1>
			Tab Content 1
		</ibm-tab>
		<ibm-tab #content2>
			Tab Content 2
		</ibm-tab>
		<ibm-tab #content3>
			Tab Content 3
		</ibm-tab>
		<ibm-tab #content4>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content5>
			Tab Content 5
		</ibm-tab>
	`
})
export class TabStory {
	@Input() skeleton = false;
	@Input() followFocus = true;
	@Input() cacheActive = false;
	@Input() isNavigation = true;
	@Input() type = "line";
}
