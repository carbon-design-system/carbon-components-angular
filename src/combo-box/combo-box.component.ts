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
	selector: "n-combo-box",
	template: `
		<n-pill-input
			[pills]="pills"
			[placeholder]="placeholder"
			[displayValue]="selectedValue"
			[type]="type"
			(updatePills)="updatePills()"
			(search)="doSearch($event)"
			(submit)="doSubmit($event)">
		</n-pill-input>
		<ng-content></ng-content>
	`,
	host: {
		class: "combo",
		role: "combobox",
		"[attr.aria-expanded]": "dropdownButton?dropdownButton.open:false",
		"[attr.aria-disabled]": "disabled?true:null"
	}
})
export class ComboBox {
	public pills = [];
	public selectedValue = "";
	private dropdownList = [];
	private dropdown;
	@Input() items: Array<ListItem> = [];
	@Input() placeholder = "";
	@Input() type: "single" | "multi" = "single";
	@Output() submit: EventEmitter<any> = new EventEmitter<any>();
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	@ContentChild(DropdownButton) dropdownButton: DropdownButton;
	@ViewChild(PillInput) pillInput: PillInput;

	constructor(private _elementRef: ElementRef) {}

	ngOnChanges(changes) {
		if (changes.items) {
			this.view["updateList"](changes.items.currentValue);
			this.updatePills();
		}
	}

	ngAfterContentInit() {
		if (this.view) {
			this.view.type = this.type;
			this.view.select.subscribe((ev) => {
				if (this.type === "multi") {
					this.updatePills();
				} else {
					if (ev.item.selected) {
						this.selectedValue = ev.item.content;
					} else {
						this.selectedValue = "";
					}
					this.dropdownButton.open = false;
				}
			});
			this.view["updateList"](this.items);
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
		} else if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			ev.stopPropagation();
			setTimeout(() => this.view.getCurrentElement().focus(), 0);
		} else if (ev.key === "ArrowUp" && this.dropdown.contains(ev.target) && !this.view.getPrevElement()) {
			// setTimeout(() => this.pillInput._elementRef.nativeElement.focus(), 0);
		}
	}

	public updatePills() {
		this.pills = this.view.getSelected() || [];
	}

	public doSearch(ev) {
		this.view["filterBy"](ev);
		if (ev !== "") {
			this.dropdownButton.open = true;
		}
		if (this.type === "single") {
			if (!this.view.items.some(item => item.content === ev)) {
				let selected = this.view.getSelected();
				if (selected) { selected[0].selected = false; }
			}
		}
	}

	doSubmit(ev) {
		let index = 0;
		if (ev.after) {
			index = this.view.items.indexOf(ev.after) + 1;
		}
		this.submit.emit({
			items: this.view.items,
			index,
			value: {
				content: ev.value,
				selected: false
			}
		});
	}
}
