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
		<div
			role="combobox"
			[attr.aria-expanded]="open">
			<n-pill-input
				[pills]="pills"
				[placeholder]="placeholder"
				[displayValue]="selectedValue"
				[type]="type"
				[disabled]="disabled"
				(updatePills)="updatePills()"
				(search)="onSearch($event)"
				(submit)="onSubmit($event)">
			</n-pill-input>
			<button
				#dropdownButton
				role="button"
				class="btn--add-on"
				type="button"
				[disabled]="disabled"
				[ngStyle]="{
					height: open?null:'30px'
				}"
				(click)="toggleDropdown()">
				<svg
					class="icon--xs"
					[ngClass]="{
						open: open
					}"
					width="16"
					height="16">
					<use xlink:href="#chevron_down_16"></use>
				</svg>
			</button>
		</div>
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
	@HostBinding("attr.aria-disabled") @Input() disabled = false;
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
	/** emits an empty event when the menu is closed */
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	/** ContentChild reference to the instantiated dropdown list */
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	/** ContentChild reference to the instantiated dropdown button */
	@ViewChild("dropdownButton") dropdownButton;
	/** ViewChild of the pill input component */
	@ViewChild(PillInput) pillInput: PillInput;

	@HostBinding("attr.class") class = "combobox";
	@HostBinding("style.display") display = "block";

	public open = false;

	/** Selected items for multi-select combo-boxes. */
	public pills = [];
	/** used to update the displayValue of `n-pill-input` */
	public selectedValue = "";
	/** internal reference to the dropdown list */
	private dropdown;

	/**
	 * Creates an instance of ComboBox.
	 * @param {ElementRef} elementRef
	 * @memberof ComboBox
	 */
	constructor(private elementRef: ElementRef) {}

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
					this.elementRef.nativeElement.querySelector("input").focus();
					this.closeDropdown();
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
		this.dropdown = this.elementRef.nativeElement.querySelector("ul");
		document.addEventListener("click", ev => {
			if (!this.elementRef.nativeElement.contains(ev.target)) {
				this.pillInput.expanded = false;
				if (this.open) {
					this.closeDropdown();
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
			this.closeDropdown();
		} else if (ev.key === "ArrowDown" && !this.dropdown.contains(ev.target)) {
			ev.stopPropagation();
			this.openDropdown();
			setTimeout(() => this.view.getCurrentElement().focus(), 0);
		} else if (ev.key === "ArrowUp" && this.dropdown.contains(ev.target) && !this.view["hasPrevElement"]()) {
			this.elementRef.nativeElement.querySelector(".combobox_input").focus();
		}
	}

	/**
	 * called by `n-pill-input` when the selected pills have changed
	 */
	public updatePills() {
		this.pills = this.view.getSelected() || [];
	}

	/** closes the dropdown and emits the close event */
	public closeDropdown() {
		this.open = false;
		this.close.emit();
	}

	/** opens the dropdown */
	public openDropdown() {
		this.open = true;
	}

	/** toggles the dropdown */
	public toggleDropdown() {
		if (this.open) {
			this.closeDropdown();
		} else {
			this.openDropdown();
		}
	}

	/**
	 * Sets the list group filter, and manages single select item selection
	 *
	 * @param {string} searchString
	 */
	public onSearch(searchString) {
		this.view["filterBy"](searchString);
		if (searchString !== "") {
			this.openDropdown();
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
	public onSubmit(ev) {
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
