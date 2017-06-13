import {
	Component,
	OnInit,
	ContentChild,
	Input,
	HostListener,
	ElementRef
} from "@angular/core";
import { DropdownButton } from "./dropdown-button.component";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";

@Component({
	selector: "cdl-combo-box",
	template: `
		<cdl-pill-input
			[pills]="pills"
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
	public pills = null;
	public selectedValue = "";
	private dropdownList = [];
	private dropdown;
	@Input() placeholder = "";
	@Input() type: "single" | "multi" = "single";
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	@ContentChild(DropdownButton) dropdownButton: DropdownButton;

	constructor(private _elementRef: ElementRef) {}

	ngAfterContentInit() {
		if (this.view) {
			this.view.type = this.type;
			this.view.select.subscribe((ev) => {
				if (this.type === "multi") {
					// filter on the initial set because the view set could be filtered differently
					this.pills = this.dropdownList.filter(x => x.selected);
				} else {
					if (ev.item.selected) {
						this.selectedValue = ev.item.content;
					} else {
						this.selectedValue = "";
					}
				}
			});
			// get a reference to the loaded state of the item list
			// (the obj refs will stay the same, so we can use that to populate the pills)
			this.dropdownList = this.view.items;
		}
	}

	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
	}

	@HostListener("keydown", ["$event"])
	hostkeys(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.dropdownButton.open = false;
		}
		if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			this.view.getCurrentElement().focus();
		}
	}

	public removePills() {
		this.pills = this.dropdownList.filter(x => x.selected);
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
