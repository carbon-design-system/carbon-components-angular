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
	TemplateRef,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from "@angular/core";
import { AbstractDropdownView, DropdownService } from "carbon-components-angular/dropdown";
import { ListItem } from "carbon-components-angular/dropdown";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { filter } from "rxjs/operators";
import {
	getScrollableParents,
	hasScrollableParents
} from "carbon-components-angular/utils";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

/**
 * Get started with importing the module:
 *
 * ```typescript
 * import { ComboBoxModule } from 'carbon-components-angular';
 * ```
 *
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * [See demo](../../?path=/story/components-combobox--basic)
 */
@Component({
	selector: "cds-combo-box, ibm-combo-box",
	template: `
		<div
			class="cds--list-box__wrapper"
			[ngClass]="{
				'cds--list-box__wrapper--fluid': fluid,
				'cds--list-box__wrapper--fluid--invalid': fluid && invalid,
				'cds--list-box__wrapper--fluid--focus': fluid && _isFocused
			}">
			@if (label) {
				<label
					[for]="id"
					[id]="labelId"
					class="cds--label"
					[ngClass]="{
						'cds--label--disabled': disabled,
						'cds--visually-hidden': hideLabel
					}">
					@if (isTemplate(label)) {
						<ng-template [ngTemplateOutlet]="label" />
					} @else {
						{{label}}
					}
				</label>
			}
			<div
				#listbox
				[ngClass]="{
					'cds--multi-select cds--multi-select--filterable': type === 'multi',
					'cds--list-box--light': theme === 'light',
					'cds--list-box--expanded': open,
					'cds--list-box--sm': size === 'sm',
					'cds--list-box--md': size === 'md',
					'cds--list-box--lg': size === 'lg',
					'cds--list-box--disabled': disabled,
					'cds--combo-box--readonly': readonly,
					'cds--combo-box--warning cds--list-box--warning': warn,
					'cds--list-box--invalid': invalid
				}"
				class="cds--list-box cds--combo-box"
				[attr.data-invalid]="(invalid ? true : null)">
				<div
					class="cds--list-box__field"
					(click)="toggleDropdown()"
					(blur)="onBlur()">
					@if (type === 'multi' && pills.length > 0) {
						<div
							class="cds--tag cds--tag--filter cds--tag--high-contrast"
							[ngClass]="{'cds--tag--disabled': disabled || readonly}">
							<span class="cds--tag__label">{{ pills.length }}</span>
							<button
								type="button"
								(click)="clearSelected($event)"
								(blur)="onBlur()"
								(keydown.enter)="clearSelected($event)"
								class="cds--tag__close-icon"
								tabindex="0"
								[title]="clearSelectionsTitle"
								[disabled]="disabled || readonly"
								[attr.aria-label]="clearSelectionAria">
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
							</button>
						</div>
					}
					<input
						#input
						type="text"
						autocomplete="off"
						role="combobox"
						[disabled]="disabled"
						[readOnly]="readonly"
						(input)="onSearch($event.target.value)"
						(focus)="fluid ? handleFocus($event) : null"
						(blur)="fluid ? handleFocus($event) : onBlur()"
						(keydown.enter)="onSubmit($event)"
						[value]="selectedValue"
						class="cds--text-input"
						[ngClass]="{'cds--text-input--empty': !showClearButton}"
						tabindex="0"
						[id]="id"
						[attr.aria-labelledby]="labelId"
						[attr.aria-expanded]="open"
						aria-haspopup="listbox"
						[attr.maxlength]="maxLength"
						[attr.aria-controls]="open ? view?.listId : null"
						[attr.aria-autocomplete]="autocomplete"
						[placeholder]="placeholder"/>
					@if (invalid) {
						<svg
							cdsIcon="warning--filled"
							size="16"
							class="cds--list-box__invalid-icon">
						</svg>
					} @else if (warn) {
						<svg
							cdsIcon="warning--alt--filled"
							size="16"
							class="cds--list-box__invalid-icon cds--list-box__invalid-icon--warning">
						</svg>
					}
					@if (showClearButton) {
						<div
							role="button"
							class="cds--list-box__selection"
							tabindex="0"
							[attr.aria-label]="clearSelectionAria"
							[title]="clearSelectionTitle"
							(keyup.enter)="clearInput($event)"
							(click)="clearInput($event)"
							(blur)="onBlur()">
							<svg cdsIcon="close" size="16"></svg>
						</div>
					}
					<button
						type="button"
						role="button"
						class="cds--list-box__menu-icon"
						tabindex="-1"
						[title]="open ? closeMenuAria : openMenuAria"
						[attr.aria-label]="open ? closeMenuAria : openMenuAria"
						[ngClass]="{'cds--list-box__menu-icon--open': open}">
						<svg cdsIcon="chevron--down" size="16"></svg>
					</button>
				</div>
				<div
					#dropdownMenu
					[ngClass]="{
						'cds--list-box--up': this.dropUp !== null && this.dropUp !== undefined ? dropUp : _dropUp
					}">
					@if (open) {
						<ng-content />
					}
				</div>
			</div>
			@if (fluid) {
				<hr class="cds--list-box__divider" />
			}
			@if (invalid) {
				<div class="cds--form-requirement">
					@if (isTemplate(invalidText)) {
						<ng-template [ngTemplateOutlet]="invalidText" />
					} @else {
						{{ invalidText }}
					}
				</div>
			} @else if (warn) {
				<div class="cds--form-requirement">
					@if (isTemplate(warnText)) {
						<ng-template [ngTemplateOutlet]="warnText" />
					} @else {
						{{warnText}}
					}
				</div>
			} @else if(helperText && !fluid) {
				<div
					class="cds--form__helper-text"
					[ngClass]="{'cds--form__helper-text--disabled': disabled}">
						@if (isTemplate(helperText)) {
							<ng-template [ngTemplateOutlet]="helperText" />
						} @else {
							{{helperText}}
						}
				</div>
			}
		</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ComboBox,
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboBox implements OnChanges, AfterViewInit, AfterContentInit, OnDestroy {
	/**
	 * Text to show when nothing is selected.
	 */
	@Input() set placeholder(value: string | Observable<string>) {
		this._placeholder.override(value);
	}

	get placeholder() {
		return this._placeholder.value;
	}
	/**
	 * Value to display for accessibility purposes on the combobox control menu when closed
	 */
	@Input() set openMenuAria(value: string | Observable<string>) {
		this._openMenuAria.override(value);
	}

	get openMenuAria() {
		return this._openMenuAria.value;
	}
	/**
	 * Value to display for accessibility purposes on the combobox control menu when opened
	 */
	@Input() set closeMenuAria(value: string | Observable<string>) {
		this._closeMenuAria.override(value);
	}

	get closeMenuAria() {
		return this._closeMenuAria.value;
	}
	/**
	 * Value to display on the clear selections icon, when multi is selected
	 */
	@Input() set clearSelectionsTitle(value: string | Observable<string>) {
		this._clearSelectionsTitle.override(value);
	}

	get clearSelectionsTitle() {
		return this._clearSelectionsTitle.value;
	}
	/**
	 * Value to display for accessibility purposes to clear selections, when multi is selected
	 */
	@Input() set clearSelectionsAria(value: string | Observable<string>) {
		this._clearSelectionsAria.override(value);
	}

	get clearSelectionsAria() {
		return this._clearSelectionsAria.value;
	}
	/**
	 * Value to display on the clear the selected item icon, when single is selected
	 */
	@Input() set clearSelectionTitle(value: string | Observable<string>) {
		this._clearSelectionTitle.override(value);
	}

	get clearSelectionTitle() {
		return this._clearSelectionTitle.value;
	}
	/**
	 * Value to display for accessibility purposes on the clear the selected item icon, when single is selected
	 */
	@Input() set clearSelectionAria(value: string | Observable<string>) {
		this._clearSelectionAria.override(value);
	}

	get clearSelectionAria() {
		return this._clearSelectionAria.value;
	}
	static comboBoxCount = 0;
	@Input() id = `combobox-${ComboBox.comboBoxCount++}`;
	@Input() labelId = `combobox-label-${ComboBox.comboBoxCount++}`;
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
	 * Combo box type (supporting single or multi selection of items).
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * Combo box render size.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	@Input() itemValueKey: string;
	/**
	 * Label for the combobox.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Hide label while keeping it accessible for screen readers
	 */
	@Input() hideLabel = false;
	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * set to `true` to place the dropdown view inline with the component
	 */
	@Input() appendInline: boolean = null;
	/**
	 * Set to `true` to show the invalid state.
	 */
	@Input() invalid = false;
	/**
	 * Value displayed if combobox is in an invalid state.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	* Set to `true` to show a warning (contents set by warnText)
	*/
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * Max length value to limit input characters
	 */
	@Input() maxLength: number = null;
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Specify feedback (mode) of the selection.
	 * `top`: selected item jumps to top
	 * `fixed`: selected item stays at its position
	 * `top-after-reopen`: selected item jump to top after reopen dropdown
	 */
	@Input() selectionFeedback: "top" | "fixed" | "top-after-reopen" = "top-after-reopen";
	/**
	 * Specify aria-autocomplete attribute of text input.
	 * "list", is the expected value for a combobox that invokes a drop-down list
	 */
	@Input() autocomplete = "list";
	/**
	 * Overrides the automatic dropUp.
	 */
	@Input() dropUp: boolean;
	/**
	 * Set to `true` to disable combobox.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for readonly state.
	 */
	@Input() readonly = false;
	/**
	 * Experimental: enable fluid state
	 */
	@Input() fluid = false;
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
	@Output() submit = new EventEmitter<{
		items: ListItem[],
		index: number,
		value: {
			content: string,
			selected: boolean
		}
	}>();
	/** Emits an empty event when the menu is closed */
	@Output() close = new EventEmitter<void>();
	/** Emits the search string from the input */
	@Output() search = new EventEmitter<string>();
	/** Emits an event when the clear button is clicked. */
	@Output() clear = new EventEmitter<Event>();
	/** ContentChild reference to the instantiated dropdown list */
	@ContentChild(AbstractDropdownView, { static: true }) view: AbstractDropdownView;
	@ViewChild("dropdownMenu") dropdownMenu;
	@ViewChild("input", { static: true }) input: ElementRef;
	@ViewChild("listbox", { static: true }) listbox: ElementRef;
	@HostBinding("class.cds--list-box__wrapper") hostClass = true;

	public open = false;

	public showClearButton = false;

	/** Selected items for multi-select combo-boxes. */
	public pills = [];
	/** used to update the displayValue */
	public selectedValue = "";

	outsideClick = this._outsideClick.bind(this);
	keyboardNav = this._keyboardNav.bind(this);
	/**
	 * controls whether the `drop-up` class is applied
	 */
	_dropUp = false;

	protected noop = this._noop.bind(this);
	protected onTouchedCallback: () => void = this._noop;
	protected propagateChangeCallback: (_: any) => void = this._noop;

	protected _placeholder = this.i18n.getOverridable("COMBOBOX.PLACEHOLDER");
	protected _closeMenuAria = this.i18n.getOverridable("COMBOBOX.A11Y.CLOSE_MENU");
	protected _openMenuAria = this.i18n.getOverridable("COMBOBOX.A11Y.OPEN_MENU");
	protected _clearSelectionsTitle = this.i18n.getOverridable("COMBOBOX.CLEAR_SELECTIONS");
	protected _clearSelectionsAria = this.i18n.getOverridable("COMBOBOX.A11Y.CLEAR_SELECTIONS");
	protected _clearSelectionTitle = this.i18n.getOverridable("COMBOBOX.CLEAR_SELECTED");
	protected _clearSelectionAria = this.i18n.getOverridable("COMBOBOX.A11Y.CLEAR_SELECTED");

	protected _isFocused = false;

	/**
	 * Creates an instance of ComboBox.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected dropdownService: DropdownService,
		protected i18n: I18n,
		protected cdr: ChangeDetectorRef
	) {}

	/**
	 * Lifecycle hook.
	 * Updates pills if necessary.
	 *
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.view.items = changes.items.currentValue;
			this.updateSelected();
			// If new items are added into the combobox while there is search input,
			// repeat the search. Search should only trigger for type 'single' when there is no value selected.
			if (this.type === "multi" || (this.type === "single" && !this.selectedValue)) {
				this.onSearch(this.input.nativeElement.value, false);
			}
		}
	}

	/**
	 * Sets initial state that depends on child components
	 * Subscribes to select events and handles focus/filtering/initial list updates
	 */
	ngAfterContentInit() {
		if (this.view) {
			this.view.type = this.type;

			// function to check if the event is organic (isUpdate === false) or programmatic
			const isUpdate = event => event && event.isUpdate;

			this.view.select.subscribe(event => {
				if (Array.isArray(event)) {
					this.updatePills();
					if (!isUpdate(event)) {
						if (this.itemValueKey && this.view.getSelected()) {
							const values = this.view.getSelected().map(item => item[this.itemValueKey]);
							this.propagateChangeCallback(values);
						// otherwise just pass up the values from `getSelected`
						} else {
							this.propagateChangeCallback(this.view.getSelected());
						}
						this.selected.emit(event);
					}
				} else {
					// If type is single, dropdown list will emit an object
					if (event.item && event.item.selected) {
						this.showClearButton = true;
						this.selectedValue = event.item.content;

						if (!isUpdate(event)) {
							if (this.itemValueKey) {
								this.propagateChangeCallback(event.item[this.itemValueKey]);
							} else {
								this.propagateChangeCallback(event.item);
							}
						}
					} else {
						this.selectedValue = "";
						if (!isUpdate(event)) {
							this.propagateChangeCallback(null);
						}
					}
					// not guarding these since the nativeElement has to be loaded
					// for select to even fire
					// only focus for "organic" selections
					if (!isUpdate(event)) {
						this.elementRef.nativeElement.querySelector("input").focus();
						this.view.filterBy("");
						this.selected.emit(event.item);
					}
					this.closeDropdown();
				}
			});
			// update the rest of combobox with any pre-selected items
			// setTimeout just defers the call to the next check cycle
			setTimeout(() => {
				this.updateSelected();
			});

			this.view.blurIntent.pipe(filter(v => v === "top")).subscribe(() => {
				this.elementRef.nativeElement.querySelector(".cds--text-input").focus();
			});
		}
	}

	/**
	 * Binds event handlers against the rendered view
	 */
	ngAfterViewInit() {
		// if appendInline is default valued (null) we should:
		// 1. if there are scrollable parents (not including body) don't append inline
		//    this should also cover the case where the dropdown is in a modal
		//    (where we _do_ want to append to the placeholder)
		if (this.appendInline === null && hasScrollableParents(this.elementRef.nativeElement)) {
			this.appendInline = false;
		// 2. otherwise we should append inline
		} else if (this.appendInline === null) {
			this.appendInline = true;
		}
	}

	/**
	 * Removing the `Dropdown` from the body if it is appended to the body.
	 */
	ngOnDestroy() {
		if (!this.appendInline) {
			this._appendToDropdown();
		}
	}

	/**
	 * Handles `Escape/Tab` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
	 */
	@HostListener("keydown", ["$event"])
	hostkeys(ev: KeyboardEvent) {
		if (ev.key === "Escape") {
			this.closeDropdown();
		} else if ((ev.key === "ArrowDown")
			&& (!this.dropdownMenu || !this.dropdownMenu.nativeElement.contains(ev.target))) {
			ev.preventDefault();
			this.openDropdown();
			setTimeout(() => { this.view.initFocus(); }, 0);
		}

		if (
			this.open && ev.key === "Tab" &&
			(this.dropdownMenu.nativeElement.contains(ev.target as Node) || ev.target === this.input.nativeElement)
		) {
			this.closeDropdown();
		}

		if (this.open && ev.key === "Tab" && ev.shiftKey) {
			this.closeDropdown();
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
		if (this.type === "single") {
			if (this.itemValueKey) {
				// clone the specified item and update its state
				const newValue = Object.assign({}, this.view.getListItems().find(item => item[this.itemValueKey] === value));
				newValue.selected = true;
				this.view.propagateSelected([newValue]);
			} else {
				// all items in propagateSelected must be iterable
				this.view.propagateSelected([value || ""]);
			}
			this.showClearButton = !!(value && this.view.getSelected().length);
		} else {
			if (this.itemValueKey) {
				// clone the items and update their state based on the received value array
				// this way we don't lose any additional metadata that may be passed in via the `items` Input
				let newValues = [];
				for (const v of value ?? []) {
					for (const item of this.view.getListItems()) {
						if (item[this.itemValueKey] === v) {
							newValues.push(Object.assign({}, item, { selected: true }));
						}
					}
				}
				this.view.propagateSelected(newValues);
			} else {
				this.view.propagateSelected(value ? value : [""]);
			}
		}
		this.updateSelected();
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
	 * `ControlValueAccessor` method to programmatically disable the combobox.
	 *
	 * ex: `this.formGroup.get("myCoolCombobox").disable();`
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Called by `n-pill-input` when the selected pills have changed.
	 */
	public updatePills() {
		this.pills = this.view.getSelected() || [];
		this.checkForReorder();
	}

	public clearSelected(event) {
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
		const selected = this.view.getSelected();

		// in case there are disabled items they should be mapped according to itemValueKey
		if (this.itemValueKey && selected) {
			const values = selected.map((item) => item[this.itemValueKey]);
			this.propagateChangeCallback(values);
		} else {
			this.propagateChangeCallback(selected);
		}

		this.selected.emit(selected as any);
		this.clear.emit(event);
	}

	/**
	 * Closes the dropdown and emits the close event.
	 */
	public closeDropdown() {
		this.open = false;
		this.checkForReorder();
		this.close.emit();
		if (!this.appendInline) {
			this._appendToDropdown();
		}

		document.removeEventListener("click", this.outsideClick, true);

		this.cdr.markForCheck();
	}

	/**
	 * Opens the dropdown.
	 */
	public openDropdown() {
		if (this.disabled || this.readonly) { return; }
		this.open = true;
		this._dropUp = false;

		if (!this.appendInline) {
			this._appendToBody();
		}

		document.addEventListener("click", this.outsideClick, true);

		// set the dropdown menu to drop up if it is near the bottom of the screen
		// setTimeout lets us do the calculations after it is visible in the DOM
		setTimeout(() => {
			if (this.dropUp === null || this.dropUp === undefined) {
				this._dropUp = this._shouldDropUp();
			}
		}, 0);

		this.cdr.markForCheck();
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
	public onSearch(searchString, shouldEmitSearch = true) {
		if (shouldEmitSearch) {
			this.search.emit(searchString);
		}
		this.showClearButton = !!searchString;
		this.view.filterBy(searchString);
		if (searchString !== "") {
			if (!this.open) {
				this.openDropdown();
			}
		} else {
			this.selectedValue = "";
			if (this.type === "multi" &&
				(this.selectionFeedback === "top" || this.selectionFeedback === "top-after-reopen")) {
				this.view.reorderSelected();
			}
		}
		if (this.type === "single") {
			// deselect if the input doesn't match the content
			// of any given item
			const matches = this.view.getListItems().some(item => item.content.toLowerCase().includes(searchString.toLowerCase()));
			if (!matches) {
				const selected = this.view.getSelected();
				if (!selected || !selected[0]) {
					this.view.filterBy(searchString);
				}
			}
		}
	}

	/**
	 * Intended to be used to add items to the list.
	 */
	public onSubmit(event: KeyboardEvent) {
		this.submit.emit({
			items: this.view.getListItems(),
			index: 0,
			value: {
				content: (event.target as HTMLInputElement).value,
				selected: false
			}
		});
	}

	clearInput(event) {
		event.stopPropagation();
		event.preventDefault();

		if (this.disabled || this.readonly) {
			return;
		}

		if (this.type === "single") { // don't want to clear selected or close if multi
			this.clearSelected(event);
			this.closeDropdown();
		}

		this.selectedValue = "";
		this.input.nativeElement.value = "";

		this.showClearButton = false;
		this.input.nativeElement.focus();
		this.onSearch(this.input.nativeElement.value);
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
	 */
	_keyboardNav(event: KeyboardEvent) {
		if ((event.key === "Escape") && this.open) {
			event.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (event.key === "Escape") {
			event.preventDefault();
			this.closeDropdown();
			this.input.nativeElement.focus();
		} else if (this.open && event.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.input.nativeElement.focus();
			this.input.nativeElement.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Tab" }));
			this.closeDropdown();
		}
	}

	/**
	 * Creates the `Dropdown` list as an element that is appended to the DOM body.
	 */
	_appendToBody() {
		this.dropdownService.appendToBody(
			this.listbox.nativeElement,
			this.dropdownMenu.nativeElement,
			`${this.elementRef.nativeElement.className}${this.open ? " cds--list-box--expanded" : ""}`);
		this.dropdownMenu.nativeElement.addEventListener("keydown", this.keyboardNav, true);
	}

	/**
	 * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
	 */
	_appendToDropdown() {
		this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
		this.dropdownMenu.nativeElement.removeEventListener("keydown", this.keyboardNav, true);
	}

	/**
	 * Detects whether or not the `Dropdown` list is visible within all scrollable parents.
	 * This can be overridden by passing in a value to the `dropUp` input.
	 */
	_shouldDropUp() {
		// check if dropdownMenu exists first.
		const menu = this.dropdownMenu && this.dropdownMenu.nativeElement.querySelector(".cds--list-box__menu");
		// check if menu exists first.
		const menuRect = menu && menu.getBoundingClientRect();
		if (menu && menuRect) {
			const scrollableParents = getScrollableParents(menu);
			return scrollableParents.reduce((shouldDropUp: boolean, parent: HTMLElement) => {
				const parentRect = parent.getBoundingClientRect();
				const isBelowParent = !(menuRect.bottom <= parentRect.bottom);
				return shouldDropUp || isBelowParent;
			}, false);
		}

		return false;
	}

	/**
	 * Handles clicks outside of the `Dropdown` list.
	 */
	_outsideClick(event) {
		if (!this.elementRef.nativeElement.contains(event.target) &&
			// if we're appendToBody the list isn't within the _elementRef,
			// so we've got to check if our target is possibly in there too.
			!this.dropdownMenu.nativeElement.contains(event.target)) {
			this.closeDropdown();
		}
	}

	handleFocus(event: FocusEvent) {
		this._isFocused = event.type === "focus";
	}

	protected updateSelected() {
		const selected = this.view.getSelected();
		if (this.type === "multi") {
			this.updatePills();
		} else if (selected) {
			const value = selected[0] ? selected[0].content : "";
			const changeCallbackValue = selected[0] ? selected[0] : "";
			this.selectedValue = value;
			this.showClearButton = !!value;
		}
	}

	protected checkForReorder() {
		const topAfterReopen = !this.open && this.selectionFeedback === "top-after-reopen";
		if ((this.type === "multi") && (topAfterReopen || this.selectionFeedback === "top")) {
			this.view.reorderSelected(true);
		}
	}
}
