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
		this.tabs.changes.subscribe(changes => {
			this.setFirstTab();
		});
		this.setFirstTab();
	}

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
