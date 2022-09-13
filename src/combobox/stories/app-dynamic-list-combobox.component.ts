import { Component, AfterViewInit } from "@angular/core";

@Component({
	selector: "app-dynamic-list-combobox",
	template: `
		<ibm-combo-box
			[(items)]="items"
			type="multi"
			(selected)="updateSelected($event)">
			<ibm-dropdown-list></ibm-dropdown-list>
		</ibm-combo-box>
	`
})
export class DynamicListComboBox implements AfterViewInit {
	items = [
		{
			content: "one"
		},
		{
			content: "two"
		},
		{
			content: "three"
		},
		{
			content: "four"
		}
	];

	updateSelected(event) {
		this.items.forEach((item: any) => {
			if (event.some(selectedItem => selectedItem.content === item.content)) {
				item.selected = true;
			} else {
				item.selected = false;
			}
		});
	}

	ngAfterViewInit() {
		setTimeout(() => {
			const newItems = JSON.parse(JSON.stringify(this.items));
			newItems.push({ content: `New ${newItems.length}` });
			this.items = newItems;
		}, 4000);
	}
}
