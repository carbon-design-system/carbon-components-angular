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
	TemplateRef
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

// Observable import is required here so typescript can compile correctly
import { Observable, fromEvent, of, Subscription } from "rxjs";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { position } from "@carbon/utils-position";
import { I18n } from "./../i18n/i18n.module";
import { ListItem } from "./list-item.interface";
import { DropdownService } from "./dropdown.service";

/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 * [See demo](../../?path=/story/dropdown--basic)
 *
 * <example-url>../../iframe.html?id=dropdown--basic</example-url>
 *
 * @export
 * @class Dropdown
 * @implements {OnInit}
 * @implements {AfterContentInit}
 * @implements {OnDestroy}
 */
@Component({
	selector: "ibm-dropdown",
	template: `
	<label [for]="id" class="bx--label">
		<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
		<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
	</label>
	<div *ngIf="helperText" class="bx--form__helper-text">
		<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
		<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
	</div>
	<div
		[id]="id"
		class="bx--dropdown bx--list-box"
		[ngClass]="{
			'bx--dropdown--light': theme === 'light',
			'bx--list-box--inline': inline,
			'bx--skeleton': skeleton,
			'bx--dropdown--disabled bx--list-box--disabled': disabled
		}">
		<button
			type="button"
			#dropdownButton
			class="bx--list-box__field"
			[ngClass]="{'a': !menuIsClosed}"
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			(click)="toggleMenu()"
			(blur)="onBlur()"
			[disabled]="disabled">
			<div
				(click)="clearSelected()"
				*ngIf="type === 'multi' && getSelectedCount() > 0"
				class="bx--list-box__selection--multi"
				title="Clear all selected items">
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
			<span *ngIf="isRenderString()" class="bx--list-box__label">{{getDisplayStringValue() | async}}</span>
			<ng-template
				*ngIf="!isRenderString()"
				[ngTemplateOutletContext]="getRenderTemplateContext()"
				[ngTemplateOutlet]="displayValue">
			</ng-template>
			<ibm-icon-chevron-down16
				*ngIf="!skeleton"
				class="bx--list-box__menu-icon"
				[attr.aria-label]="menuButtonLabel"
				[ngClass]="{'bx--list-box__menu-icon--open': !menuIsClosed }">
			</ibm-icon-chevron-down16>
		</button>
		<div
			#dropdownMenu
			[ngClass]="{
				'drop-up': dropUp
			}">
			<ng-content *ngIf="!menuIsClosed"></ng-content>
		</div>
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
export class Dropdown implements OnInit, AfterContentInit, OnDestroy {
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
	 * Size to render the dropdown field.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
	 * item selection.
	 */
	@Input() type: "single" | "multi" = "single";
	/**
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
	 * Deprecated. Dropdown now defaults to appending inline
	 * Set to `true` if the `Dropdown` is to be appended to the DOM body.
	 */
	@Input() set appendToBody (v) {
		console.log("`appendToBody` has been deprecated. Dropdowns now append to the body by default.");
		console.log("Ensure you have an `ibm-placeholder` in your app.");
		console.log("Use `appendInline` if you need to position your dropdowns within the normal page flow.");
		this.appendInline = !v;
	}

	get appendToBody() {
		return !this.appendInline;
	}
	/**
	 * set to `true` to place the dropdown view inline with the component
	 */
	@Input() appendInline = false;
	/**
	 * Query string for the element that contains the `Dropdown`.
	 * Used to trigger closing the dropdown if it scrolls outside of the viewport of the `scrollableContainer`.
	 */
	@Input() scrollableContainer: string;
	/**
	 * Specifies the property to be used as the return value to `ngModel`
	 */
	@Input() value: string;
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
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	/**
	 * Maintains a reference to the view DOM element of the `Dropdown` button.
	 */
	@ViewChild("dropdownButton") dropdownButton;
	/**
	 * ViewChid of the dropdown view.
	 */
	@ViewChild("dropdownMenu") dropdownMenu;

	@HostBinding("class.bx--dropdown__wrapper") hostClass = true;
	/**
	 * Set to `true` if the dropdown is closed (not expanded).
	 */
	menuIsClosed = true;

	/**
	 * controls wether the `drop-up` class is applied
	 */
	dropUp = false;

	// .bind creates a new function, so we declare the methods below
	// but .bind them up here
	noop = this._noop.bind(this);
	outsideClick = this._outsideClick.bind(this);
	outsideKey = this._outsideKey.bind(this);
	keyboardNav = this._keyboardNav.bind(this);
	/**
	 *  Maintians an Event Observable Subscription for tracking scrolling within the open `Dropdown` list.
	 */
	scroll: Subscription;

	protected onTouchedCallback: () => void = this._noop;

	/**
	 * Creates an instance of Dropdown.
	 */
	constructor(protected elementRef: ElementRef, protected i18n: I18n, protected dropdownService: DropdownService) {}

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
		this.view.type = this.type;
		this.view.size = this.size;
		this.view.select.subscribe(event => {
			if (this.type === "multi") {
				// if we have a `value` selector and selected items map them approperiatly
				if (this.value && this.view.getSelected()) {
					const values = this.view.getSelected().map(item => item[this.value]);
					this.propagateChange(values);
				// otherwise just pass up the values from `getSelected`
				} else {
					this.propagateChange(this.view.getSelected());
				}
			} else {
				this.closeMenu();
				if (event.item && event.item.selected) {
					if (this.value) {
						this.propagateChange(event.item[this.value]);
					} else {
						this.propagateChange(event.item);
					}
				} else {
					this.propagateChange(null);
				}
			}
			this.selected.emit(event);
		});
	}

	/**
	 * Removing the `Dropdown` from the body if it is appended to the body.
	 */
	ngOnDestroy() {
		if (this.appendToBody) {
			this._appendToDropdown();
		}
	}

	/**
	 * Propagates the injected `value`.
	 */
	writeValue(value: any) {
		// propagate null/falsey as an array (deselect everything)
		if (!value) {
			this.view.propagateSelected([value]);
		} else if (this.type === "single") {
			if (this.value) {
				// clone the specified item and update its state
				const newValue = Object.assign({}, this.view.getListItems().find(item => item[this.value] === value));
				newValue.selected = true;
				this.view.propagateSelected([newValue]);
			} else {
				// pass the singular value as an array of ListItem
				this.view.propagateSelected([value]);
			}
		} else {
			if (this.value) {
				// clone the items and update their state based on the received value array
				// this way we don't lose any additional metadata that may be passed in view the `items` Input
				const newValues = Array.from(this.view.getListItems(), item => Object.assign({}, item));
				for (const v of value) {
					for (const newValue of newValues) {
						if (newValue[this.value] === v) {
							newValue.selected = true;
						}
					}
				}
				this.view.propagateSelected(newValues);
			} else {
				// we can safely assume we're passing an array of `ListItem`s
				this.view.propagateSelected(value);
			}
		}
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

	propagateChange = (_: any) => {};

	/**
	 * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
	 */
	@HostListener("keydown", ["$event"])
	// "Esc", "Spacebar", "Down", and "Up" are IE specific values
	onKeyDown(event: KeyboardEvent) {
		if ((event.key === "Escape" || event.key === "Esc") && !this.menuIsClosed) {
			event.stopImmediatePropagation();  // don't unintentionally close other widgets that listen for Escape
		}
		if (event.key === "Escape" || event.key === "Esc") {
			event.preventDefault();
			this.closeMenu();
			this.dropdownButton.nativeElement.focus();
		} else if (this.menuIsClosed && (event.key === " " || event.key === "ArrowDown" || event.key === "ArrowUp" ||
			event.key === "Spacebar" || event.key === "Down" || event.key === "Up")) {
			if (this.disableArrowKeys && (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Down" || event.key === "Up")) {
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
		// "Down", and "Up" are IE specific values
		if (event.key === "ArrowDown" || event.key === "Down") {
			event.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getNextItem();
			if (item) { item.selected = true; }
		} else if (event.key === "ArrowUp" || event.key === "Up") {
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
		if (selected && (!this.displayValue || !this.isRenderString())) {
			if (this.type === "multi") {
				return of(this.placeholder);
			} else {
				return of(selected[0].content);
			}
		} else if (selected && this.isRenderString()) {
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
			return {items: selected};
		} else if (selected && selected.length > 0) {
			return {item: selected[0]}; // this is to be compatible with the dropdown-list template
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

	_noop() {}
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
		// "Esc" is an IE specific value
		if ((event.key === "Escape" || event.key === "Esc") && !this.menuIsClosed) {
			event.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (event.key === "Escape" || event.key === "Esc") {
			event.preventDefault();
			this.closeMenu();
			this.dropdownButton.nativeElement.focus();
		} else if (!this.menuIsClosed && event.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.dropdownButton.nativeElement.focus();
			this.dropdownButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key: "Tab"}));
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
		this.dropdownService.appendToBody(
			this.dropdownButton.nativeElement,
			this.dropdownMenu.nativeElement,
			this.elementRef.nativeElement.className);
		this.dropdownMenu.nativeElement.addEventListener("keydown", this.keyboardNav, true);
	}

	/**
	 * Expands the dropdown menu in the view.
	 */
	openMenu() {
		this.menuIsClosed = false;

		// move the dropdown list to the body if we're not appending inline
		// and position it relative to the dropdown wrapper
		if (!this.appendInline) {
			this.addScrollEventListener();
			this._appendToBody();
		}

		// set the dropdown menu to drop up if it's near the bottom of the screen
		// setTimeout lets us measure after it's visible in the DOM
		setTimeout(() => {
			const menu = this.dropdownMenu.nativeElement;
			const boundingClientRect = menu.getBoundingClientRect();

			if (boundingClientRect.bottom > window.innerHeight) {
				// min height of 100px
				if (window.innerHeight - boundingClientRect.top > 100) {
					// remove the conditional once this api is settled and part of abstract-dropdown-view.class
					if (this.view["enableScroll"]) {
						this.view["enableScroll"]();
					}
				} else {
					this.dropUp = true;
				}
			} else {
				this.dropUp = false;
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
			this.removeScrollEventListener();
			this._appendToDropdown();
		}
		document.body.firstElementChild.removeEventListener("click", this.noop, true);
		document.body.firstElementChild.removeEventListener("keydown", this.noop, true);
		document.removeEventListener("click", this.outsideClick, true);
		document.removeEventListener("keydown", this.outsideKey, true);
	}

	/**
	 * Add scroll event listener if scrollableContainer is provided
	 */
	addScrollEventListener() {
		if (this.scrollableContainer) {
			const container: HTMLElement = document.querySelector(this.scrollableContainer);

			if (container) {
				this.scroll = fromEvent(container, "scroll")
				.subscribe(() => {
					if (this.isVisibleInContainer(this.elementRef.nativeElement, container)) {
						this.dropdownService.updatePosition(this.dropdownButton.nativeElement);
					} else {
						this.closeMenu();
					}
				});
			}
		}
	}

	/**
	 * Removes any `EventListeners` responsible for scroll functionality.
	 */
	removeScrollEventListener() {
		if (this.scroll) {
			this.scroll.unsubscribe();
		}
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

	/**
	 * Returns `true` if the `elem` is visible within the `container`.
	 */
	isVisibleInContainer(elem: HTMLElement, container: HTMLElement): boolean {
		const containerTop = container.scrollTop;
		const containerBottom = containerTop + container.offsetHeight;
		const elemTop = elem.offsetTop + elem.offsetHeight;
		const elemBottom = elemTop;

		if ((elemBottom <= containerBottom) && (elemTop >= containerTop)) {
			return true;
		}

		return false;
	}

	public isTemplate(value) {
		return value instanceof TemplateRef;
	}
}
