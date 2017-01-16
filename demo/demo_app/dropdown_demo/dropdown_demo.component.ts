import { Component, OnInit } from "@angular/core";
import {cloneDeep} from "lodash";

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

	// private demoItems1 = this.demoItems0.assign();
	private demoItems1 = cloneDeep(this.demoItems0);
	private demoItems2 = cloneDeep(this.demoItems0);
	private demoItems3 = cloneDeep(this.demoItems0);

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

}
