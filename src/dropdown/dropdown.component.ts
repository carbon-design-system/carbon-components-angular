import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ContentChild,
	OnInit,
	ViewChild,
	AfterContentInit,
	HostListener,
	OnDestroy,
	HostBinding,
	TemplateRef,
	AfterViewInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

// Observable import is required here so typescript can compile correctly
import {
	Observable,
	of,
	Subscription
} from "rxjs";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { I18n } from "carbon-components-angular/i18n";
import { ListItem } from "./list-item.interface";
import { DropdownService } from "./dropdown.service";
import { ElementService, getScrollableParents } from "carbon-components-angular/utils";
import { hasScrollableParents } from "carbon-components-angular/utils";

/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 * #### Opening behavior/List DOM placement
 * By default the dropdown will try to figure out the best placement for the dropdown list.
 *
 * If it's not contained within any scrolling elements, it will open inline, if it _is_
 * contained within a scrolling container it will try to open in the body, or an `cds-placeholder`.
 *
 * To control this behavior you can use the `appendInline` input:
 * - `[appendInline]="null"` is the default (auto detection)
 * - `[appendInline]="false"` will always append to the body/`cds-placeholder`
 * - `[appendInline]="true"` will always append inline (next to the dropdown button)
 *
 * Get started with importing the module:
 *
 * ```typescript
 * import { DropdownModule } from 'carbon-components-angular';
 * ```
 *
 * [See demo](../../?path=/story/components-dropdown--basic)
 */
@Component({
	selector: "cds-dropdown, ibm-dropdown",
	template: `
	<label
		*ngIf="label"
		[for]="id"
		class="cds--label"
		[ngClass]="{'cds--label--disabled': disabled}">
		<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
		<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
	</label>
	<div
		class="cds--list-box"
		[ngClass]="{
			'cds--dropdown': type !== 'multi',
			'cds--multiselect': type === 'multi',
			'cds--multi-select--selected': type === 'multi' && getSelectedCount() > 0,
			'cds--dropdown--light': theme === 'light',
			'cds--list-box--light': theme === 'light',
			'cds--list-box--inline': inline,
			'cds--skeleton': skeleton,
			'cds--dropdown--disabled cds--list-box--disabled': disabled,
			'cds--dropdown--invalid': invalid,
			'cds--dropdown--warning cds--list-box--warning': warn,
			'cds--dropdown--sm cds--list-box--sm': size === 'sm',
			'cds--dropdown--md cds--list-box--md': size === 'md',
			'cds--dropdown--lg cds--list-box--lg': size === 'lg',
			'cds--list-box--expanded': !menuIsClosed
		}">
		<button
			#dropdownButton
			[id]="id"
			type="button"
			class="cds--list-box__field"
			[ngClass]="{'a': !menuIsClosed}"
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			aria-haspopup="listbox"
			(click)="disabled ? $event.stopPropagation() : toggleMenu()"
			(blur)="onBlur()"
			[attr.disabled]="disabled ? true : null">
			<div
				(click)="clearSelected()"
				(keydown.enter)="clearSelected()"
				*ngIf="type === 'multi' && getSelectedCount() > 0"
				class="cds--list-box__selection cds--tag--filter cds--list-box__selection--multi"
				tabindex="0"
				[title]="clearText">
				{{getSelectedCount()}}
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
			<span *ngIf="isRenderString()" class="cds--list-box__label">{{getDisplayStringValue() | async}}</span>
			<ng-template
				*ngIf="!isRenderString()"
				[ngTemplateOutletContext]="getRenderTemplateContext()"
				[ngTemplateOutlet]="displayValue">
			</ng-template>
			<svg
				*ngIf="!warn && invalid"
				class="cds--dropdown__invalid-icon"
				cdsIcon="warning--filled"
				size="16">
			</svg>
			<svg
				*ngIf="!invalid && warn"
				cdsIcon="warning--alt--filled"
				size="16"
				class="cds--list-box__invalid-icon cds--list-box__invalid-icon--warning">
			</svg>
			<span class="cds--list-box__menu-icon">
				<svg
					*ngIf="!skeleton"
					cdsIcon="chevron--down"
					size="16"
					[attr.aria-label]="menuButtonLabel"
					[ngClass]="{'cds--list-box__menu-icon--open': !menuIsClosed }">
				</svg>
			</span>
		</button>
		<div
			#dropdownMenu
			[ngClass]="{
				'cds--list-box--up': this.dropUp !== null && this.dropUp !== undefined ? dropUp : _dropUp
			}">
			<ng-content *ngIf="!menuIsClosed"></ng-content>
		</div>
	</div>
	<div
		*ngIf="helperText && !invalid && !warn"
		class="cds--form__helper-text"
		[ngClass]="{
			'cds--form__helper-text--disabled': disabled
		}">
		<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
		<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
	</div>
	<div *ngIf="!warn && invalid" class="cds--form-requirement">
		<ng-container *ngIf="!isTemplate(invalidText)">{{ invalidText }}</ng-container>
		<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
	</div>
	<div *ngIf="!invalid && warn" class="cds--form-requirement">
		<ng-container *ngIf="!isTemplate(warnText)">{{warnText}}</ng-container>
		<ng-template *ngIf="isTemplate(warnText)" [ngTemplateOutlet]="warnText"></ng-template>
	</div>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Dropdown,
			multi: true
		}
	]
})
export class Dropdown implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, ControlValueAccessor {
	static dropdownCount = 0;
	@Input() id = `dropdown-${Dropdown.dropdownCount++}`;
	/**
	 * Label for the dropdown.
	 */
	@Input() label: string | TemplateRef<any>;
	/**
	 * Sets the optional helper text.
	 */
	@Input() helperText: string | TemplateRef<any>;
	/**
	 * Value displayed if no item is selected.
	 */
	@Input() placeholder = "";
	/**
	 * The selected value from the `Dropdown`. Can be a string or template.
	 */
	@Input() displayValue: string | TemplateRef<any> = "";
	/**
	 * Sets the optional clear button tooltip text.
	 */
	@Input() clearText: string = this.i18n.get().DROPDOWN.CLEAR;
	/**
	 * Size to render the dropdown field.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
	 * item selection.
	 */
	@Input() type: "single" | "multi" = "single";
	/**
	 * @deprecated since v5 - Use `cdsLayer` directive instead
	 * `light` or `dark` dropdown theme
	 */
	@Input() theme: "light" | "dark" = "dark";
	/**
	 * Set to `true` to disable the dropdown.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` for a loading dropdown.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for an inline dropdown.
	 */
	@Input() inline = false;
	/**
	 * Set to `true` for a dropdown without arrow key activation.
	 */
	@Input() disableArrowKeys = false;
	/**
	 * Set to `true` for invalid state.
	 */
	@Input() invalid = false;
	/**
	 * Value displayed if dropdown is in invalid state.
	 */
	@Input() invalidText: string | TemplateRef<any>;
	/**
	  * Set to `true` to show a warning (contents set by warningText)
	  */
	@Input() warn = false;
	/**
	 * Sets the warning text
	 */
	@Input() warnText: string | TemplateRef<any>;
	/**
	 * set to `true` to place the dropdown view inline with the component
	 */
	@Input() appendInline: boolean = null;
	/**
	 * Query string for the element that contains the `Dropdown`.
	 * Used to trigger closing the dropdown if it scrolls outside of the viewport of the `scrollableContainer`.
	 */
	@Input() scrollableContainer: string;
	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	@Input() itemValueKey: string;
	/**
	 * Specify feedback (mode) of the selection.
	 * `top`: selected item jumps to top
	 * `fixed`: selected item stays at it's position
	 * `top-after-reopen`: selected item jump to top after reopen dropdown
	 */
	@Input() selectionFeedback: "top" | "fixed" | "top-after-reopen" = "top-after-reopen";
	/**
	 * Accessible label for the button that opens the dropdown list.
	 * Defaults to the `DROPDOWN.OPEN` value from the i18n service.
	 */
	@Input() menuButtonLabel = this.i18n.get().DROPDOWN.OPEN;
	/**
	 * Provides the label for the "# selected" text.
	 * Defaults to the `DROPDOWN.SELECTED` value from the i18n service.
	 */
	@Input() selectedLabel = this.i18n.get().DROPDOWN.SELECTED;
	/**
	 * Overrides the automatic dropUp.
	 */
	@Input() dropUp: boolean;
	/**
	 * Emits selection events.
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
	 */
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
	/**
	 * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
	 */
	@Output() close: EventEmitter<any> = new EventEmitter<any>();

	/**
	 * Maintains a reference to the `AbstractDropdownView` object within the content DOM.
	 */
	@ContentChild(AbstractDropdownView, { static: true }) view: AbstractDropdownView;
	/**
	 * Maintains a reference to the view DOM element of the `Dropdown` button.
	 */
	@ViewChild("dropdownButton", { static: true }) dropdownButton;
	/**
	 * ViewChid of the dropdown view.
	 */
	@ViewChild("dropdownMenu", { static: true }) dropdownMenu;

	@HostBinding("class.cds--dropdown__wrapper") hostClass = true;
	/**
	 * Set to `true` if the dropdown is closed (not expanded).
	 */
	menuIsClosed = true;

	/**
	 * controls whether the `drop-up` class is applied
	 */
	_dropUp = false;

	// .bind creates a new function, so we declare the methods below
	// but .bind them up here
	noop = this._noop.bind(this);
	outsideClick = this._outsideClick.bind(this);
	outsideKey = this._outsideKey.bind(this);
	keyboardNav = this._keyboardNav.bind(this);

	protected visibilitySubscription = new Subscription();

	protected onTouchedCallback: () => void = this._noop;

	// primarily used to capture and propagate input to `writeValue` before the content is available
	private _writtenValue: any = [];
	protected get writtenValue() {
		return this._writtenValue;
	}
	protected set writtenValue(val: any[]) {
		if (val && val.length === 0) {
			this.clearSelected();
		}
		this._writtenValue = val;
	}

	/**
	 * Creates an instance of Dropdown.
	 */
	constructor(
		protected elementRef: ElementRef,
		protected i18n: I18n,
		protected dropdownService: DropdownService,
		protected elementService: ElementService) {}

	/**
	 * Updates the `type` property in the `@ContentChild`.
	 * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
	 */
	ngOnInit() {
		if (this.view) {
			this.view.type = this.type;
		}
	}

	/**
	 * Initializes classes and subscribes to events for single or multi selection.
	 */
	ngAfterContentInit() {
		if (!this.view) {
			return;
		}
		if ((this.writtenValue && this.writtenValue.length) || typeof this.writtenValue === "number") {
			this.writeValue(this.writtenValue);
		}
		this.view.type = this.type;
		this.view.size = this.size;

		// function to check if the event is organic (isUpdate === false) or programmatic
		const isUpdate = event => event && event.isUpdate;

		this.view.select.subscribe(event => {
			if (this.type === "single" && !isUpdate(event) && !Array.isArray(event)) {
				this.closeMenu();
				if (event.item && event.item.selected) {
					if (this.itemValueKey) {
						this.propagateChange(event.item[this.itemValueKey]);
					} else {
						this.propagateChange(event.item);
					}
				} else {
					this.propagateChange(null);
				}
			}

			if (this.type === "multi" && !isUpdate(event)) {
				// if we have a `value` selector and selected items map them appropriately
				if (this.itemValueKey && this.view.getSelected()) {
					const values = this.view.getSelected().map(item => item[this.itemValueKey]);
					this.propagateChange(values);
					// otherwise just pass up the values from `getSelected`
				} else {
					this.propagateChange(this.view.getSelected());
				}
			}
			// only emit selected for "organic" selections
			if (!isUpdate(event)) {
				this.checkForReorder();
				this.selected.emit(event);
			}
		});
	}

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
		this.checkForReorder();
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
	 * Propagates the injected `value`.
	 */
	writeValue(value: any) {
		// cache the written value so we can use it in `AfterContentInit`
		this.writtenValue = value;
		this.view.onItemsReady(() => {
			// propagate null/falsey as an array (deselect everything)
			if (!value) {
				this.view.propagateSelected([value]);
			} else if (this.type === "single") {
				if (this.itemValueKey) {
					// clone the specified item and update its state
					const newValue = Object.assign({}, this.view.getListItems().find(item => item[this.itemValueKey] === value));
					newValue.selected = true;
					this.view.propagateSelected([newValue]);
				} else {
					// pass the singular value as an array of ListItem
					this.view.propagateSelected([value]);
				}
			} else {
				if (this.itemValueKey) {
					// clone the items and update their state based on the received value array
					// this way we don't lose any additional metadata that may be passed in via the `items` Input
					let newValues = [];
					for (const v of value) {
						for (const item of this.view.getListItems()) {
							if (item[this.itemValueKey] === v) {
								newValues.push(Object.assign({}, item, { selected: true }));
							}
						}
					}
					this.view.propagateSelected(newValues);
				} else {
					// we can safely assume we're passing an array of `ListItem`s
					this.view.propagateSelected(value);
				}
			}
			this.checkForReorder();
		});
	}

	onBlur() {
		this.onTouchedCallback();
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	/**
	 * Registering the function injected to control the touch use of the `Dropdown`.
	 */
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	/**
	 * function passed in by `registerOnChange`
	 */
	propagateChange = (_: any) => { };

	/**
	 * `ControlValueAccessor` method to programmatically disable the dropdown.
	 *
	 * ex: `this.formGroup.get("myDropdown").disable();`
	 *
	 * @param isDisabled `true` to disable the input
	 */
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	/**
	 * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
	 */
	@HostListener("keydown", ["$event"])
	onKeyDown(event: KeyboardEvent) {
		if ((event.key === "Escape") && !this.menuIsClosed) {
			event.stopImmediatePropagation();  // don't unintentionally close other widgets that listen for Escape
		}
		if (event.key === "Escape") {
			event.preventDefault();
			this.closeMenu();
			this.dropdownButton.nativeElement.focus();
		} else if (this.menuIsClosed && (event.key === " " || event.key === "ArrowDown" || event.key === "ArrowUp")) {
			if (this.disableArrowKeys && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
				return;
			}
			event.preventDefault();
			this.openMenu();
		}

		if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(event.target as Node)) {
			this.closeMenu();
		}

		if (!this.menuIsClosed && event.key === "Tab" && event.shiftKey) {
			this.closeMenu();
		}

		if (this.type === "multi") { return; }

		if (this.menuIsClosed) {
			this.closedDropdownNavigation(event);
		}
	}

	closedDropdownNavigation(event) {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getNextItem();
			if (item) { item.selected = true; }
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getPrevItem();
			if (item) { item.selected = true; }
		}
	}

	/**
	 * Returns the display value if there is a selection and displayValue is set,
	 * if there is just a selection the ListItem content property will be returned,
	 * otherwise the placeholder will be returned.
	 */
	getDisplayStringValue(): Observable<string> {
		if (!this.view) {
			return;
		}
		let selected = this.view.getSelected();
		if (selected.length && (!this.displayValue || !this.isRenderString())) {
			if (this.type === "multi") {
				return of(this.placeholder);
			} else {
				return of(selected[0].content);
			}
		} else if (selected.length && this.isRenderString()) {
			return of(this.displayValue as string);
		}
		return of(this.placeholder);
	}

	isRenderString(): boolean {
		return typeof this.displayValue === "string";
	}

	getRenderTemplateContext() {
		if (!this.view) {
			return;
		}
		let selected = this.view.getSelected();
		if (this.type === "multi") {
			return { items: selected };
		} else if (selected && selected.length > 0) {
			return { item: selected[0] }; // this is to be compatible with the dropdown-list template
		} else {
			return {};
		}
	}

	getSelectedCount(): number {
		if (this.view.getSelected()) {
			return this.view.getSelected().length;
		}
	}

	clearSelected() {
		if (this.disabled || this.getSelectedCount() === 0) {
			return;
		}
		for (const item of this.view.getListItems()) {
			item.selected = false;
		}
		this.selected.emit([]);
		this.propagateChange([]);
	}

	/**
	 * Returns `true` if there is a value selected.
	 */
	valueSelected(): boolean {
		if (this.view.getSelected()) { return true; }
		return false;
	}

	_noop() { }
	/**
	 * Handles clicks outside of the `Dropdown`.
	 */
	_outsideClick(event) {
		if (!this.elementRef.nativeElement.contains(event.target) &&
			// if we're appendToBody the list isn't within the _elementRef,
			// so we've got to check if our target is possibly in there too.
			!this.dropdownMenu.nativeElement.contains(event.target)) {
			this.closeMenu();
		}
	}
	_outsideKey(event) {
		if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(event.target as Node)) {
			this.closeMenu();
		}
	}
	/**
	 * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
	 */
	_keyboardNav(event: KeyboardEvent) {
		if (event.key === "Escape" && !this.menuIsClosed) {
			event.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (event.key === "Escape") {
			event.preventDefault();
			this.closeMenu();
			this.dropdownButton.nativeElement.focus();
		} else if (!this.menuIsClosed && event.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.dropdownButton.nativeElement.focus();
			this.dropdownButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Tab" }));
			this.closeMenu();
		}
	}

	/**
	 * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
	 */
	_appendToDropdown() {
		this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
		this.dropdownMenu.nativeElement.removeEventListener("keydown", this.keyboardNav, true);
	}

	/**
	 * Creates the `Dropdown` list as an element that is appended to the DOM body.
	 */
	_appendToBody() {
		const lightClass = this.theme === "light" ? " cds--list-box--light" : "";
		const expandedClass = !this.menuIsClosed ? " cds--list-box--expanded" : "";
		this.dropdownService.appendToBody(
			this.dropdownButton.nativeElement,
			this.dropdownMenu.nativeElement,
			`${this.elementRef.nativeElement.className}${lightClass}${expandedClass}`);
		this.dropdownMenu.nativeElement.addEventListener("keydown", this.keyboardNav, true);
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
	 * Expands the dropdown menu in the view.
	 */
	openMenu() {
		// prevents the dropdown from opening when list of items is empty
		if (this.view.getListItems().length === 0) {
			return;
		}

		this._dropUp = false;
		this.menuIsClosed = false;

		// move the dropdown list to the body if we're not appending inline
		// and position it relative to the dropdown wrapper
		if (!this.appendInline) {
			const target = this.dropdownButton.nativeElement;
			const parent = this.elementRef.nativeElement;
			this.visibilitySubscription = this.elementService
				.visibility(target, parent)
				.subscribe(value => {
					if (!value.visible) {
						this.closeMenu();
					}
				});
			this._appendToBody();
		}

		// set the dropdown menu to drop up if it's near the bottom of the screen
		// setTimeout lets us measure after it's visible in the DOM
		setTimeout(() => {
			if (this.dropUp === null || this.dropUp === undefined) {
				this._dropUp = this._shouldDropUp();
			}
		}, 0);

		// we bind noop to document.body.firstElementChild to allow safari to fire events
		// from document. Then we unbind everything later to keep things light.
		document.body.firstElementChild.addEventListener("click", this.noop, true);
		document.body.firstElementChild.addEventListener("keydown", this.noop, true);
		document.addEventListener("click", this.outsideClick, true);
		document.addEventListener("keydown", this.outsideKey, true);
		setTimeout(() => this.view.initFocus(), 0);
	}

	/**
	 * Collapsing the dropdown menu and removing unnecessary `EventListeners`.
	 */
	closeMenu() {
		// return early if the menu is already closed
		if (this.menuIsClosed) { return; }
		this.menuIsClosed = true;
		this.checkForReorder();
		this.onClose.emit();
		this.close.emit();

		// focus the trigger button when we close ...
		this.dropdownButton.nativeElement.focus();

		// remove the conditional once this api is settled and part of abstract-dropdown-view.class
		if (this.view["disableScroll"]) {
			this.view["disableScroll"]();
		}

		// move the list back in the component on close
		if (!this.appendInline) {
			this.visibilitySubscription.unsubscribe();
			this._appendToDropdown();
		}
		document.body.firstElementChild.removeEventListener("click", this.noop, true);
		document.body.firstElementChild.removeEventListener("keydown", this.noop, true);
		document.removeEventListener("click", this.outsideClick, true);
		document.removeEventListener("keydown", this.outsideKey, true);
	}

	/**
	 * Controls toggling menu states between open/expanded and closed/collapsed.
	 */
	toggleMenu() {
		if (this.menuIsClosed) {
			this.openMenu();
		} else {
			this.closeMenu();
		}
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}

	/**
	 * Controls when it's needed to apply the selection feedback
	 */
	protected checkForReorder() {
		const topAfterReopen = this.menuIsClosed && this.selectionFeedback === "top-after-reopen";
		if ((this.type === "multi") && (topAfterReopen || this.selectionFeedback === "top")) {
			this.view.reorderSelected();
		}
	}
}
