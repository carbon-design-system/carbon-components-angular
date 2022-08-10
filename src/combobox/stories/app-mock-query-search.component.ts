import { Component } from "@angular/core";

@Component({
	selector: "app-mock-query-search",
	template: `
		<ibm-combo-box
			appendInline="true"
			[items]="filterItems"
			(search)="onSearch($event)">
			<ibm-dropdown-list></ibm-dropdown-list>
		</ibm-combo-box>
	`
})
export class MockQueryCombobox {
	filterItems: any = [];

	onSearch() {
		// Call API or search through items list
		setTimeout(() => {
			this.filterItems = [
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` }
			];
		}, 1000);
	}
}
