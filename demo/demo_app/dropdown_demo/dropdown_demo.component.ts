import { Component, OnInit } from "@angular/core";

@Component({
	selector: "dropdown-demo",
	templateUrl: "./dropdown_demo.component.html",
})
export class DropdownDemo {
	private display = "Dropdown 1";
	private displayCustom = "Dropdown 3";

	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false
		},
		{
			content: "item three",
			selected: false
		},
		{
			content: "item four",
			selected: false
		}
	];

	private demoItemsCustom = this.clone(this.demoItems);
	private demoItems1 = this.clone(this.demoItems);
	private demoItems2 = this.clone(this.demoItems);

	private nestedDemoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			subMenu: [
				{
					content: "sub item two 1",
					selected: false
				},
				{
					content: "sub item two 2",
					selected: false,
					subMenu: [
						{
							content: "sub item two 1b",
							selected: false
						},
						{
							content: "sub item two 2b",
							selected: false,
						}
					]
				},
			]
		},
		{
			content: "item three",
			selected: false
		},
		{
			content: "item four",
			selected: false
		}
	];

	private nestedDemoItems1 = this.clone(this.nestedDemoItems);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	onSelectAndDisplay(ev) {
		ev.item.selected = !ev.item.selected;
		if (ev.item.selected) {
			this.display = ev.item.content;
		} else {
			this.display = "Dropdown 1";
		}
	}

	onSelectAndDisplayCustom(ev) {
		ev.item.selected = !ev.item.selected;

		this.displayCustom = ""; // reset the display

		let demoItemsListLength = this.demoItemsCustom.length;
		for (let i = 0; i < demoItemsListLength; i++) {
			let item = this.demoItemsCustom[i];

			if (item.selected === true) {
				this.displayCustom += item.content + "; ";
			}
		}

		if (this.displayCustom.length === 0) {
			this.displayCustom = "Dropdown 3";
		}
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	onNestedSelect(ev) {
		if (!ev.item.subMenu) {
			ev.item.selected = !ev.item.selected;
		}
	}
}
