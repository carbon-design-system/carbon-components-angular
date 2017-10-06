import {
	Component,
	OnChanges,
	OnInit,
	ContentChild,
	Input,
	Output,
	HostListener,
	ElementRef,
	ViewChild,
	EventEmitter,
	AfterViewInit,
	AfterContentInit,
	HostBinding
} from "@angular/core";
import { DropdownButton } from "./dropdown-button.component";
import { PillInput } from "./pill-input.component";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { ListItem } from "./../dropdown/list-item.interface";

/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 */
@Component({
	selector: "n-combo-box",
	template: `
		<n-pill-input
			[pills]="pills"
			[placeholder]="placeholder"
			[displayValue]="selectedValue"
			[type]="type"
			[disabled]="disabled"
			(updatePills)="updatePills()"
			(search)="doSearch($event)"
			(submit)="doSubmit($event)">
		</n-pill-input>
		<ng-content></ng-content>
	`
})
export class ComboBox implements OnChanges, AfterViewInit, AfterContentInit {
	/**
	 * List of items to fill the content with.
	 *
	 * **Example:**
	 * ```javascript
	 * items = [
	 *		{
	 *			content: "Abacus",
	 *			selected: false
	 *		},
	 *		{
	 *			content: "Byte",
	 *			selected: false,
	 *		},
	 *		{
	 *			content: "Computer",
	 *			selected: false
	 *		},
	 *		{
	 *			content: "Digital",
	 *			selected: false
	 *		}
	 * ];
	 * ```
	 *
	 * @type {Array<ListItem>}
	 * @memberof ComboBox
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Text to show when nothing is selected.
	 *
	 * @memberof ComboBox
	 */
	@Input() placeholder = "";
	/**
	 * Combo box type.
	 *
	 * `"single"` | `"multi"`
	 *
	 * @type {("single" | "multi")}
	 * @memberof ComboBox
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * Combo box size.
	 *
	 * `"sm"` | `"default"` | `"lg"`
	 *
	 * @type {("sm" | "default" | "lg")}
	 * @memberof ComboBox
	 */
	@Input() size: "sm" | "default" | "lg" = "default";
	/**
	 * Set to `true` to disable combobox.
	 *
	 * @memberof ComboBox
	 */
	@Input() disabled = false;
	/**
	 * Emits a ListItem
	 *
	 * Example:
	 * ```javascript
	 * {
	 * 		content: "one",
	 * 		selected: true
	 * }
	 * ```
	 */
	@Output() selected: EventEmitter<ListItem> = new EventEmitter<ListItem>();
	/**
	 * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
	 *
	 * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
	 *
	 * Example:
	 * ```javascript
	 *	{
	 *		items: [{content: "one", selected: true}, {content: "two", selected: true}],
	 *		index: 1,
	 *		value: {
	 *			content: "some user string",
	 *			selected: false
	 *		}
	 *	}
	 * ```
	 *
	 * @param ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
	 *
	 * Example:
	 * ```javascript
	 * {
	 *	after: 1,
	 *	value: "some user string"
	 * }
	 * ```
	 */
	@Output() submit: EventEmitter<any> = new EventEmitter<any>();
	/** ContentChild reference to the instantiated dropdown list */
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	/** ContentChild reference to the instantiated dropdown button */
	@ContentChild(DropdownButton) dropdownButton: DropdownButton;
	/** ViewChild of the pill input component */
	@ViewChild(PillInput) pillInput: PillInput;

	@HostBinding("attr.role") role = "combobox";
	@HostBinding("attr.class") class = "combo";
	@HostBinding("attr.aria-expanded") ariaExpanded = this.dropdownButton ? this.dropdownButton.open : false;
	@HostBinding("attr.aria-disabled") ariaDisabled = this.disabled ? true : null;

	/** Selected items for multi-select combo-boxes. */
	public pills = [];
	/** used to update the displayValue of `n-pill-input` */
	public selectedValue = "";
	/** internal reference to the dropdown list */
	private dropdown;

	/**
	 * Creates an instance of ComboBox.
	 * @param {ElementRef} _elementRef
	 * @memberof ComboBox
	 */
	constructor(private _elementRef: ElementRef) {}

	/**
	 * Lifecycle hook.
	 *
	 * Updates pills if necessary.
	 *
	 * @param {any} changes
	 * @memberof ComboBox
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.view["updateList"](changes.items.currentValue);
			this.updatePills();
		}
	}

	/**
	 * Sets initial state that depends on child components
	 *
	 * Subscribes to select events and handles focus/filtering/initial list updates
	 */
	ngAfterContentInit() {
		this.dropdownButton.disabled = this.disabled;
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
					// not gaurding these since the nativeElement has to be loaded
					// for select to even fire
					this._elementRef.nativeElement.querySelector(".pill-input").focus();
					this._elementRef.nativeElement.querySelector(".combo-input").focus();
					this.dropdownButton.closeDropdown();
				}
				this.selected.emit(ev);
				this.view["filterBy"]("");
			});
			this.view["updateList"](this.items);
		}
	}

	/**
	 * Binds event handlers against the rendered view
	 */
	ngAfterViewInit() {
		this.dropdown = this._elementRef.nativeElement.querySelector(".dropdown-menu");
		document.addEventListener("click", ev => {
			if (!this._elementRef.nativeElement.contains(ev.target)) {
				this.pillInput.expanded = false;
				if (this.dropdownButton.open) {
					this.dropdownButton.closeDropdown();
				}
			}
		});
	}

	/**
	 * Handles escape closing the dropdown, and arrow up/down focus to/from the dropdown list
	 *
	 * @param {KeyboardEvent} ev
	 */
	@HostListener("keydown", ["$event"])
	hostkeys(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.dropdownButton.closeDropdown();
		} else if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			ev.stopPropagation();
			setTimeout(() => this.view.getCurrentElement().focus(), 0);
		} else if (ev.key === "ArrowUp" && this.dropdown.contains(ev.target) && !this.view["hasPrevElement"]()) {
			this._elementRef.nativeElement.querySelector(".pill-input").focus();
			this._elementRef.nativeElement.querySelector(".combo-input").focus();
		}
	}

	/**
	 * called by `n-pill-input` when the selected pills have changed
	 */
	public updatePills() {
		this.pills = this.view.getSelected() || [];
	}

	/**
	 * Sets the list view filter, and manages single select item selection
	 *
	 * @param {string} searchString
	 */
	public doSearch(searchString) {
		this.view["filterBy"](searchString);
		if (searchString !== "") {
			this.dropdownButton.closeDropdown();
		} else {
			this.selectedValue = "";
		}
		if (this.type === "single") {
			// deselect if the input doesn't match the content
			// of any given item
			if (!this.view.items.some(item => item.content === searchString)) {
				let selected = this.view.getSelected();
				if (selected) { selected[0].selected = false; }
			} else {
				// otherwise we remove the filter
				this.view["filterBy"]("");
			}
		}
	}

	/**
	 * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
	 *
	 * @param {any} ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
	 *
	 * Example:
	 * ```javascript
	 *	{
	 *	after: 1,
	 *	value: "some user string"
	 *	}
	 * ```
	 */
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
