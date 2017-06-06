import { Component, OnInit, ContentChild, Input, HostListener } from "@angular/core";
import { DropdownButton } from "./dropdown-button.component";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";

@Component({
	selector: "cdl-combo-box",
	template: `
		<cdl-pill-input
			[pills]="items"
			[placeholder]="placeholder"
			[displayValue]="selectedValue"
			[type]="type"
			(removePills)="removePills()"
			(search)="doSearch($event)">
		</cdl-pill-input>
		<ng-content></ng-content>
	`,
	host: {
		class: "combo"
	}
})
export class ComboBox {
	public items = null;
	public selectedValue = "";
	private dropdownList = [];
	private filteredList = [];
	@Input() placeholder = "";
	@Input() type: "single" | "multi" = "single";
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	@ContentChild(DropdownButton) dropdownButton: DropdownButton;

	ngAfterContentInit() {
		if (this.view) {
			this.view.type = this.type;
			this.view.select.subscribe((ev) => {
				if (this.type === "multi") {
					this.items = ev;
				} else {
					if (ev.item.selected) {
						this.selectedValue = ev.item.content;
					} else {
						this.selectedValue = "";
					}
				}
			});
			this.dropdownList = this.view.items;
		}
	}

	@HostListener("keydown", ["$event"])
	hostkeys(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.dropdownButton.open = false;
		}
	}

	public removePills() {
		this.items = this.items.filter(x => x.selected);
	}

	public doSearch(ev) {
		if (ev !== "") {
			this.dropdownButton.open = true;
			// also take a ref to the original dropdown list, filter it, and re-populate the dropdown
			this.view.items = this.dropdownList.filter(x => x.content.toLowerCase().includes(ev.toLowerCase()));
		} else {
			this.view.items = this.dropdownList;
		}
	}
}
