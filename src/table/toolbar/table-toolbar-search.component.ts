import { Search } from "./../../search/search.component";
import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
	selector: "ibm-table-toolbar-search",
	template: require("./../../search/search.component.html").default
})
export class TableToolbarSearch extends Search implements OnInit {
	@HostBinding("class.bx--toolbar-search-container-expandable") @Input() expandable = false;

	@HostBinding("class.bx--toolbar-search-container-persistent") get persistentClass() { return !this.expandable; }

	@HostBinding("class.bx--toolbar-search-container-active") get activeClass() {
		return this.active && this.value !== null || this.value !== "";
	}

	ngOnInit() {
		this.size = "sm";
		if (this.expandable) {
			this.toolbar = true;
		}
	}
}
