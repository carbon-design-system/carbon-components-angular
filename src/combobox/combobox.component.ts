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
	OnDestroy
} from "@angular/core";
import { AbstractDropdownView, DropdownService } from "carbon-components-angular/dropdown";
import { ListItem } from "carbon-components-angular/dropdown";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { filter } from "rxjs/operators";
import { DocumentService, hasScrollableParents } from "carbon-components-angular/utils";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * [See demo](../../?path=/story/combobox--basic)
 *
 * <example-url>../../iframe.html?id=combobox--basic</example-url>
 */
@Component({
	selector: "ibm-combo-box",
	template: `
		<label
			*ngIf="label"
			[for]="id"
			class="bx--label"
			[ngClass]="{'bx--label--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div
			*ngIf="helperText"
			class="bx--form__helper-text"
			[ngClass]="{'bx--form__helper-text--disabled': disabled}">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div
			[ngClass]="{
				'bx--multi-select': type === 'multi',
				'bx--combo-box': type === 'single' || !pills.length,
				'bx--list-box--light': theme === 'light',
				'bx--list-box--expanded': open,
				'bx--list-box--sm': size === 'sm',
				'bx--list-box--xl': size === 'xl',
				'bx--list-box--disabled': disabled
			}"
			class="bx--combo-box bx--list-box"
			role="listbox"
			[attr.data-invalid]="(invalid ? true : null)">
			<div
				[attr.aria-expanded]="open"
				role="button"
				class="bx--list-box__field"
				type="button"
				tabindex="-1"
				[attr.aria-label]="label"
				aria-haspopup="true"
				(click)="toggleDropdown()"
				(blur)="onBlur()"
				[id]="id">
				<button
					*ngIf="type === 'multi' && pills.length > 0"
					type="button"
					(click)="clearSelected()"
					(blur)="onBlur()"
					(keydown.enter)="clearSelected()"
					class="bx--tag--filter bx--list-box__selection--multi"
					[title]="clearSelectionsTitle"
					[attr.aria-label]="clearSelectionAria">
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
				</button>
				<input
					#input
					type="text"
					role="combobox"
					[disabled]="disabled"
					(input)="onSearch($event.target.value)"
					(blur)="onBlur()"
					(keydown.enter)="onSubmit($event)"
					[value]="selectedValue"
					class="bx--text-input"
					[ngClass]="{'bx--text-input--empty': !showClearButton}"
					role="searchbox"
					tabindex="0"
					[attr.aria-aria-labelledby]="id"
					[attr.maxlength]="maxLength"
					aria-haspopup="true"
					autocomplete="list"
					[placeholder]="placeholder"/>
				<ibm-icon-warning-filled size="16" *ngIf="invalid" class="bx--list-box__invalid-icon"></ibm-icon-warning-filled>
				<div
					*ngIf="showClearButton"
					role="button"
					class="bx--list-box__selection"
					tabindex="0"
					[attr.aria-label]="clearSelectionAria"
					[title]="clearSelectionTitle"
					(keyup.enter)="clearInput($event)"
					(click)="clearInput($event)"
					(blur)="onBlur()">
					<svg ibmIconClose size="16"></svg>
				</div>
				<ibm-icon-chevron-down size="16"
					[ngClass]="{'bx--list-box__menu-icon--open': open}"
					class="bx--list-box__menu-icon"
					[title]="open ? closeMenuAria : openMenuAria"
					[ariaLabel]="open ? closeMenuAria : openMenuAria">
				</ibm-icon-chevron-down>
			</div>
			<div #dropdownMenu>
				<ng-content *ngIf="open"></ng-content>
			</div>
		</div>
		<div *ngIf="invalid">
			<div *ngIf="!isTemplate(invalidText)" class="bx--form-requirement">{{ invalidText }}</div>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
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
	@Input() id = `dropdown-${ComboBox.comboBoxCount++}`;
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
	 *
	 * @deprecated since v4
	 */
	@Input() size: "sm" | "md" | "xl" = "md";
	/**
	 * Label for the combobox.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * set to `true` to place the dropdown view inline with the component
	 */
	@Input() appendInline: boolean = null;
	/**
	 * Set to `true` for invalid state.
	 */
	@Input() invalid = false;
	/**
	 * Value displayed if dropdown is in invalid state.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	 * Max length value to limit input characters
	 */
	@Input() maxLength: number = null;
	/**
	 * `light` or `dark` dropdown theme
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
	@Output() submit = new EventEmitter<any>();
	/** emits an empty event when the menu is closed */
	@Output() close = new EventEmitter<any>();
	@Output() search = new EventEmitter<any>();
	/** ContentChild reference to the instantiated dropdown list */
	// @ts-ignore
	@ContentChild(AbstractDropdownView, { static: true }) view: AbstractDropdownView;
	// @ts-ignore
	@ViewChild("dropdownMenu", { static: false }) dropdownMenu;
	// @ts-ignore
	@ViewChild("input", { static: true }) input: ElementRef;
	@HostBinding("class.bx--list-box__wrapper") hostClass = true;
	@HostBinding("attr.role") role = "combobox";
	@HostBinding("style.display") display = "block";

	public open = false;

	public showClearButton = false;

	/** Selected items for multi-select combo-boxes. */
	public pills = [];
	/** used to update the displayValue */
	public selectedValue = "";

	keyboardNav = this._keyboardNav.bind(this);

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

	/**
	 * Creates an instance of ComboBox.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected documentService: DocumentService,
		protected dropdownService: DropdownService,
		protected i18n: I18n
	) {}

	/**
	 * Lifecycle hook.
	 * Updates pills if necessary.
	 *
	 */
	ngOnChanges(changes) {
		if (changes.items) {
			this.view.items = changes.items.currentValue;
			// If new items are added into the combobox while there is search input,
			// repeat the search.
			this.onSearch(this.input.nativeElement.value, false);
			this.updateSelected();
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
						this.showClearButton = true;
						this.selectedValue = event.item.content;
						this.propagateChangeCallback(event.item);
					} else {
						this.selectedValue = "";
						this.propagateChangeCallback(null);
					}
					// not guarding these since the nativeElement has to be loaded
					// for select to even fire
					this.elementRef.nativeElement.querySelector("input").focus();
					this.view.filterBy("");
					this.closeDropdown();
				}
				this.selected.emit(event);
			});
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
		this.documentService.handleClick(event => {
			if (!this.elementRef.nativeElement.contains(event.target)) {
				if (this.open) {
					this.closeDropdown();
				}
			}
		});
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
		} else if ((ev.key === "ArrowDown" || ev.key === "Down") // `"Down"` is IE specific value
			&& (!this.dropdownMenu || !this.dropdownMenu.nativeElement.contains(ev.target))) {
			ev.stopPropagation();
			this.openDropdown();
			setTimeout(() => this.view.getCurrentElement().focus(), 0);
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
			this.view.propagateSelected([value]);
			this.showClearButton = !!(value && this.view.getSelected().length);
		} else {
			this.view.propagateSelected(value ? value : [""]);
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
	 * Called by `n-pill-input` when the selected pills have changed.
	 */
	public updatePills() {
		this.pills = this.view.getSelected() || [];
		this.checkForReorder();
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
		const selected = this.view.getSelected();
		this.propagateChangeCallback(selected);
		this.selected.emit(selected as any);
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
	}

	/**
	 * Opens the dropdown.
	 */
	public openDropdown() {
		if (this.disabled) { return; }
		this.open = true;
		if (!this.appendInline) {
			this._appendToBody();
		}
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
		this.showClearButton = searchString && this.type === "single";
		this.view.filterBy(searchString);
		if (searchString !== "") {
			this.openDropdown();
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
					this.view.filterBy("");
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

		this.clearSelected();
		this.selectedValue = "";
		this.input.nativeElement.value = "";
		this.closeDropdown();

		this.showClearButton = false;
		this.input.nativeElement.focus();
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
	 */
	_keyboardNav(event: KeyboardEvent) {
		// "Esc" is an IE specific value
		if ((event.key === "Escape" || event.key === "Esc") && this.open) {
			event.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (event.key === "Escape" || event.key === "Esc") {
			event.preventDefault();
			this.closeDropdown();
			this.input.nativeElement.focus();
		} else if (this.open && event.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.input.nativeElement.focus();
			this.input.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key: "Tab"}));
			this.closeDropdown();
		}
	}

	/**
	 * Creates the `Dropdown` list as an element that is appended to the DOM body.
	 */
	_appendToBody() {
		this.dropdownService.appendToBody(
			this.input.nativeElement,
			this.dropdownMenu.nativeElement,
			`${this.elementRef.nativeElement.className}${this.open ? " bx--list-box--expanded" : ""}`);
		this.dropdownMenu.nativeElement.addEventListener("keydown", this.keyboardNav, true);
	}

	/**
	 * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
	 */
	_appendToDropdown() {
		this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
		this.dropdownMenu.nativeElement.removeEventListener("keydown", this.keyboardNav, true);
	}

	protected updateSelected() {
		const selected = this.view.getSelected();
		if (this.type === "multi" ) {
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
			this.view.reorderSelected(this.selectionFeedback === "top");
		}
	}
}
