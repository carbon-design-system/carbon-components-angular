import {
	Component,
	OnChanges,
	ContentChild,
	Input,
	Output,
	HostListener,
	ElementRef,
	ViewChild,
	EventEmitter,
	AfterViewInit,
	AfterContentInit,
	HostBinding,
	OnInit
} from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { ListItem } from "./../dropdown/list-item.interface";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { filter } from "rxjs/operators";

/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * [See demo](../../?path=/story/combobox--basic)
 *
 * <example-url>../../iframe.html?id=combobox--basic</example-url>
 *
 * @export
 * @class ComboBox
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 * @implements {AfterContentInit}
 */
@Component({
	selector: "ibm-combo-box",
	template: `
		<div
			[attr.aria-expanded]="open"
			role="button"
			class="bx--list-box__field"
			tabindex="0"
			type="button"
			aria-label="close menu"
			aria-haspopup="true"
			(click)="toggleDropdown()">
			<div
				*ngIf="type === 'multi' && pills.length > 0"
				(click)="clearSelected()"
				role="button"
				class="bx--list-box__selection bx--list-box__selection--multi"
				tabindex="0"
				title="Clear all selected items">
				{{ pills.length }}
				<svg
					focusable="false"
					preserveAspectRatio="xMidYMid meet"
					style="will-change: transform;"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					aria-hidden="true">
					<path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path>
				</svg>
			</div>
			<input
				[disabled]="disabled"
				(keyup)="onSearch($event.target.value)"
				[value]="selectedValue"
				class="bx--text-input"
				role="combobox"
				aria-label="ListBox input field"
				autocomplete="off"
				[placeholder]="placeholder"/>
				<ibm-icon-chevron-down16
					[ngClass]="{'bx--list-box__menu-icon--open': open}"
					class="bx--list-box__menu-icon"
					ariaLabel="Close menu">
				</ibm-icon-chevron-down16>
		</div>
		<div
			#dropdownMenu
			*ngIf="open">
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ComboBox,
			multi: true
		}
	]
})
export class ComboBox implements OnChanges, OnInit, AfterViewInit, AfterContentInit {
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
	 */
	@Input() items: Array<ListItem> = [];
	/**
	 * Text to show when nothing is selected.
	 */
	@Input() placeholder = "Filter...";
	/**
	 * Combo box type (supporting single or multi selection of items).
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * Combo box render size.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Set to `true` to disable combobox.
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
	@Output() selected = new EventEmitter<ListItem | ListItem[]>();
	/**
	 * Intended to be used to add items to the list.
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
	@ViewChild("dropdownMenu") dropdownMenu;
	@HostBinding("class") class = "bx--combo-box bx--list-box";
	@HostBinding("attr.role") role = "combobox";
	@HostBinding("style.display") display = "block";

	public open = false;

	/** Selected items for multi-select combo-boxes. */
	public pills = [];
	/** used to update the displayValue */
	public selectedValue = "";

	protected noop = this._noop.bind(this);
	protected onTouchedCallback: () => void = this._noop;
	protected propagateChangeCallback: (_: any) => void = this._noop;

	/**
	 * Creates an instance of ComboBox.
	 */
	constructor(protected elementRef: ElementRef) {}

	/**
	 * Lifecycle hook.
	 * Updates pills if necessary.
	 *
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.view.items = changes.items.currentValue;
			this.updateSelected();
		}
	}

	ngOnInit() {
		if (this.type === "multi") {
			this.class = "bx--multi-select bx--combo-box bx--list-box";
		}
	}

	/**
	 * Sets initial state that depends on child components
	 * Subscribes to select events and handles focus/filtering/initial list updates
	 */
	ngAfterContentInit() {
		if (this.view) {
			this.view.type = this.type;
			this.view.select.subscribe(event => {
				if (this.type === "multi") {
					this.updatePills();
					this.propagateChangeCallback(this.view.getSelected());
				} else {
					if (event.item && event.item.selected) {
						this.selectedValue = event.item.content;
						this.propagateChangeCallback(event.item);
					} else {
						this.selectedValue = "";
						this.propagateChangeCallback(null);
					}
					// not guarding these since the nativeElement has to be loaded
					// for select to even fire
					this.elementRef.nativeElement.querySelector("input").focus();
					this.closeDropdown();
				}
				this.selected.emit(event);
				this.view.filterBy("");
			});
			this.view.items = this.items;
			// update the rest of combobox with any pre-selected items
			// setTimeout just defers the call to the next check cycle
			setTimeout(() => {
				this.updateSelected();
			});

			this.view.blurIntent.pipe(filter(v => v === "top")).subscribe(() => {
				this.elementRef.nativeElement.querySelector(".bx--text-input").focus();
			});
		}
	}

	/**
	 * Binds event handlers against the rendered view
	 */
	ngAfterViewInit() {
		document.addEventListener("click", ev => {
			if (!this.elementRef.nativeElement.contains(ev.target)) {
				if (this.open) {
					this.closeDropdown();
				}
			}
		});
	}

	/**
	 * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
	 */
	@HostListener("keydown", ["$event"])
	hostkeys(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.closeDropdown();
		} else if ((ev.key === "ArrowDown" || ev.key === "Down") // `"Down"` is IE specific value
			&& (!this.dropdownMenu || !this.dropdownMenu.nativeElement.contains(ev.target))) {
			ev.stopPropagation();
			this.openDropdown();
			setTimeout(() => this.view.getCurrentElement().focus(), 0);
		}
	}

	/*
	 * no-op method for null event listeners, and other no op calls
	 */
	_noop() {}

	/*
	 * propagates the value provided from ngModel
	 */
	writeValue(value: any) {
		if (value) {
			if (this.type === "single") {
				this.view.propagateSelected([value]);
			} else {
				this.view.propagateSelected(value);
			}
		}
	}

	onBlur() {
		this.onTouchedCallback();
	}

	registerOnChange(fn: any) {
		this.propagateChangeCallback = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	/**
	 * Called by `n-pill-input` when the selected pills have changed.
	 */
	public updatePills() {
		this.pills = this.view.getSelected() || [];
		this.propagateChangeCallback(this.view.getSelected());
	}

	public clearSelected() {
		this.items = this.items.map(item => {
			if (!item.disabled) {
				item.selected = false;
			}
			return item;
		});
		this.view.items = this.items;
		this.updatePills();
		// clearSelected can only fire on type=multi
		// so we just emit getSelected() (just in case there's any disabled but selected items)
		this.selected.emit(this.view.getSelected() as any);
	}

	/**
	 * Closes the dropdown and emits the close event.
	 */
	public closeDropdown() {
		this.open = false;
		this.close.emit();
	}

	/**
	 * Opens the dropdown.
	 */
	public openDropdown() {
		this.open = true;
	}

	/**
	 * Toggles the dropdown.
	 */
	public toggleDropdown() {
		if (this.open) {
			this.closeDropdown();
		} else {
			this.openDropdown();
		}
	}

	/**
	 * Sets the list group filter, and manages single select item selection.
	 */
	public onSearch(searchString) {
		this.view.filterBy(searchString);
		if (searchString !== "") {
			this.openDropdown();
		} else {
			this.selectedValue = "";
		}
		if (this.type === "single") {
			// deselect if the input doesn't match the content
			// of any given item
			const matches = this.view.getListItems().some(item => item.content.toLowerCase().includes(searchString.toLowerCase()));
			if (!matches) {
				const selected = this.view.getSelected();
				if (selected) {
					selected[0].selected = false;
					// notify that the selection has changed
					this.view.select.emit({ item: selected[0] });
					this.propagateChangeCallback(null);
				} else {
					this.view.filterBy("");
				}
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
			index = this.view.getListItems().indexOf(ev.after) + 1;
		}
		this.submit.emit({
			items: this.view.getListItems(),
			index,
			value: {
				content: ev.value,
				selected: false
			}
		});
	}

	protected updateSelected() {
		const selected = this.view.getSelected();
		if (selected) {
			if (this.type === "multi") {
				this.updatePills();
			} else {
				this.selectedValue = selected[0].content;
				this.propagateChangeCallback(selected[0]);
			}
		}
	}
}
