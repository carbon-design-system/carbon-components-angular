import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";


@Component({
	selector: "n-tabs",
	template: `
			<n-tab-headers *ngIf="position === 'top'" [tabs]="tabs"></n-tab-headers>
			<div class="n-tabs-content">
				<ng-content></ng-content>
			</div>
			<n-tab-headers *ngIf="position === 'bottom'" [tabs]="tabs"></n-tab-headers>
	 `
})
export class Tabs implements AfterContentInit {
	@ContentChildren(Tab) tabs: QueryList<Tab>;

	@Input() position: "top" | "bottom" = "top";
	@Input() cacheActive = false;

	ngAfterContentInit() {
		this.tabs.forEach(tab => tab.cacheActive = this.cacheActive);

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
