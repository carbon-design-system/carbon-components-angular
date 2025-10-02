import { Component } from "@angular/core";

@Component({
	selector: "app-mock-query-search",
	template: `
		<cds-combo-box
			appendInline="true"
			[items]="filterItems"
			(search)="onSearch($event)"
			(selected)="selected($event)">
			<cds-dropdown-list></cds-dropdown-list>
		</cds-combo-box>
	`
})
export class MockQueryCombobox {
	filterItems: any = [];
	currentlySelected: any;

	onSearch() {
		// Call API or search through items list
		setTimeout(() => {
			const array = [
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
				{ content: `Random ${Math.random()}` },
			];

			// Include current selected in the list to avoid auto clear
			if (this.currentlySelected) {
				array.push(this.currentlySelected)
			}
			this.filterItems = array;
		}, 1000);
	}

	selected(event: any) {
		/**
		 * Related to #ref-1245723
		 * Update this on major release
		 */
		if (Array.isArray(event) && !event.length) {
			this.currentlySelected = undefined;
		} else {
			this.currentlySelected = event;
		}
	}
}
