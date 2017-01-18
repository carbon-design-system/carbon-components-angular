import { Component, OnInit } from "@angular/core";

@Component({
	selector: "dropdown-demo",
	templateUrl: "./dropdown_demo.component.html",
})
export class DropdownDemo {
	title = "Tabs Component Demo";

	private display0 = "Dropdown 1";
	private demoItems0 = [
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

	private demoItems1 = Array.from(this.demoItems0, this.clone);
	private demoItems2 = Array.from(this.demoItems0, this.clone);
	private demoItems3 = Array.from(this.demoItems0, this.clone);

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

	private clone (el) {
		return Object.assign({}, el);
	}

	onSelectAndDisplay(ev) {
		ev.item.selected = !ev.item.selected;
		if (ev.item.selected) {
			this.display0 = ev.item.content;
		} else {
			this.display0 = "Dropdown 1";
		}
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	onNestedSelect(ev) {
		console.log(ev.item.subMenu);
		if (!ev.item.subMenu) {
			ev.item.selected = !ev.item.selected;
		}
	}

}
