import { Component, OnInit } from "@angular/core";

@Component({
	selector: "popover-demo",
	templateUrl: "./popover-demo.component.html"
})

export class PopoverDemo {
	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			disabled: true
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

	private demoItems1 = Array.from(this.demoItems, this.clone);

	private clone (el) {
		return Object.assign({}, el);
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
