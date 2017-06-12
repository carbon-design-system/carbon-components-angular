import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from  "./tab-headers.component";


@Component({
	selector: "cdl-tabs",
	template: `
			<cdl-tab-headers *ngIf="position === 'top'" [tabs]="tabs"></cdl-tab-headers>
			<div class="cdl-tabs-content">
				<ng-content></ng-content>
			</div>
			<cdl-tab-headers *ngIf="position === 'bottom'" [tabs]="tabs"></cdl-tab-headers>
	 `,
	styleUrls: ["./tabs.component.scss"]
})
export class Tabs implements AfterContentInit {
	@ContentChildren(Tab) tabs: QueryList<Tab>;

	@Input() position: "top" | "bottom" = "top";

	ngAfterContentInit() {
		let active = false;
		let firstTab;

		this.tabs.forEach((tab, index) => {
			if (!index) {
				firstTab = tab;
			}

			if (tab.active) {
				active = true;
			}
		});

		if (firstTab && !active) {
			firstTab.active = true;
		}
	}
}
