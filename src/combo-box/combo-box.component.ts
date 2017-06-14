import {
	Component,
	OnInit,
	ContentChild,
	Input,
	Output,
	HostListener,
	ElementRef,
	ViewChild,
	EventEmitter
} from "@angular/core";
import { DropdownButton } from "./dropdown-button.component";
import { PillInput } from "./pill-input.component";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { ListItem } from "./../dropdown/list-item.interface";

@Component({
	selector: "cdl-combo-box",
	template: `
		<cdl-pill-input
			[pills]="pills"
			[placeholder]="placeholder"
			[displayValue]="selectedValue"
			[type]="type"
			(updatePills)="updatePills()"
			(search)="doSearch($event)"
			(submit)="doSubmit($event)">
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
	@Input() items: Array<ListItem> = [];
	@Input() placeholder = "";
	@Input() type: "single" | "multi" = "single";
	@Output() submit: EventEmitter<ListItem> = new EventEmitter<ListItem>();
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	@ContentChild(DropdownButton) dropdownButton: DropdownButton;
	@ViewChild(PillInput) pillInput: PillInput;

	constructor(private _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		console.log(changes);
		if (changes.items) {
			this.updatePills();
		}
	}

	ngAfterContentInit() {
		if (this.view) {
			if (this.view.items) {
				console.error("list items should be passed to combobox");
			}
			this.view.type = this.type;
			this.view.select.subscribe((ev) => {
				if (this.type === "multi") {
					// filter on the initial set because the view set could be filtered differently
					this.pills = this.items.filter(x => x.selected);
				} else {
					if (ev.item.selected) {
						this.selectedValue = ev.item.content;
					} else {
						this.selectedValue = "";
					}
				}
			});
			this.view.items = this.items;
		}
	}

	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
		document.addEventListener("click", ev => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.pillInput.expanded = false;
				this.dropdownButton.open = false;
			}
		});
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

	public updatePills() {
		this.pills = this.items.filter(x => x.selected);
	}

	public doSearch(ev) {
		if (ev !== "") {
			this.dropdownButton.open = true;
			// also take a ref to the original dropdown list, filter it, and re-populate the dropdown
			this.view.items = this.items.filter(x => x.content.toLowerCase().includes(ev.toLowerCase()));
		} else {
			this.view.items = this.items;
		}
	}

	doSubmit(ev) {
		this.submit.emit({
			content: ev,
			selected: false
		});
	}
}
