import { Component, OnInit } from "@angular/core";

@Component({
	selector: "dropdown-demo",
	templateUrl: "./dropdown_demo.component.html",
})
export class DropdownDemo {
	title = "Tabs Component Demo";

	// constant a = 2;

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

	private clone (el) {
		return Object.assign({}, el);
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

}
