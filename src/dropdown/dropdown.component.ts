import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ViewEncapsulation,
	ContentChild,
	OnInit,
	ViewChild,
	AfterContentInit,
	AfterViewInit,
	HostListener,
	forwardRef,
	OnDestroy,
	HostBinding
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/throttleTime";

import { TranslateService } from "@ngx-translate/core";

import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { position } from "../common/position.service";
import { ListItem } from "./list-item.interface";
import { findNextElem, findPrevElem, focusNextElem } from "./../common/a11y.service";


/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 * @export
 * @class Dropdown
 * @implements {OnInit}
 * @implements {AfterContentInit}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Component({
	selector: "n-dropdown",
	template: `
		<button
			type="button"
			#dropdownHost
			[attr.aria-expanded]="!menuIsClosed"
			[attr.aria-disabled]="disabled"
			(click)="toggleMenu()"
			(blur)="onBlur()"
			[disabled]="disabled">
			<span *ngIf="valueSelected()" class="dropdown_value">{{getDisplayValue() | async}}</span>
			<span *ngIf="!valueSelected()" class="dropdown_placeholder">{{getDisplayValue() | async}}</span>
			<svg
				[ngClass]="{
					'icon--sm': size === 'sm',
					'icon': size === 'default' || size === 'lg'
				}"
				width="16"
				height="16"
				viewBox="0 0 16 16">
				<path d="M14.6 4L8 10.6 1.4 4l-.8.8L8 12.3l7.4-7.5z"/>
			</svg>
		</button>
		<div
			class="dropdown_menu">
			<ng-content></ng-content>
		</div>
	`,
	encapsulation: ViewEncapsulation.None,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: Dropdown,
			multi: true
		}
	]
})
export class Dropdown implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
	/**
	 * Value displayed if no item is selected.
	 * @memberof Dropdown
	 */
	@Input() placeholder = "";
	/**
	 * The selected value from the `Dropdown`.
	 * @memberof Dropdown
	 */
	@Input() displayValue = "";
	/**
	 * Size to render the dropdown field.
	 * @type {("sm" | "default" | "lg")}
	 * @memberof Dropdown
	 */
	@Input() size: "sm" | "default" | "lg" = "default";
	/**
	 * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
	 * item selection.
	 * @type {("single" | "multi")}
	 * @memberof Dropdown
	 */
	@Input() type: "single" | "multi" = "single";

	/**
	 * Set to `true` to disable the dropdown.
	 * @memberof Dropdown
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` if the `Dropdown` is to be appended to the DOM body.
	 * @type {boolean}
	 * @memberof Dropdown
	 */
	@Input() appendToBody = false;
	/**
	 * Query string for the element that contains the `Dropdown`.
	 * Used to trigger closing the dropdown if it is outside of the `scrollableContainer`.
	 * @type {string}
	 * @memberof Dropdown
	 */
	@Input() scrollableContainer: string;
	/**
	 * Emits selection events to other class.
	 * (Deprecated)
	 * @type {EventEmitter<Object>}
	 * @memberof Dropdown
	 */
	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Emits selection events.
	 * @type {EventEmitter<Object>}
	 * @memberof Dropdown
	 */
	@Output() selected: EventEmitter<Object> = new EventEmitter<Object>();
	/**
	 * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
	 * @type {EventEmitter<any>}
	 * @memberof Dropdown
	 */
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();
	/**
	 * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
	 * @type {EventEmitter<any>}
	 * @memberof Dropdown
	 */
	@Output() close: EventEmitter<any> = new EventEmitter<any>();

	/**
	 * Maintains a reference to the `AbstractDropdownView` object within the content DOM.
	 * @type {AbstractDropdownView}
	 * @memberof Dropdown
	 */
	@ContentChild(AbstractDropdownView) view: AbstractDropdownView;
	/**
	 * Maintains a reference to the view DOM element of the `Dropdown` button.
	 * @memberof Dropdown
	 */
	@ViewChild("dropdownHost") rootButton;

	/**
	 * Binds "combobox" property to the `Popover` role attribute.
	 * @memberof Dropdown
	 */
	@HostBinding("attr.role") role = "combobox";

	/**
	 * Set to `true` if the dropdown is closed (not expanded).
	 * @memberof Dropdown
	 */
	menuIsClosed = true;
	/**
	 * Maintains a reference to the dropdown list element from the view DOM.
	 * @type {HTMLElement}
	 * @memberof Dropdown
	 */
	dropdown: HTMLElement;
	dropdownWrapper: HTMLElement;
	// .bind creates a new function, so we declare the methods below
	// but .bind them up here
	noop = this._noop.bind(this);
	outsideClick = this._outsideClick.bind(this);
	outsideKey = this._outsideKey.bind(this);
	keyboardNav = this._keyboardNav.bind(this);
	/**
	 * Maintains an Event Observable for tracking window resizes.
	 * Window resizing is tracked if the `Dropdown` is appended to the body, otherwise it does not need to be supported.
	 * @memberof Dropdown
	 */
	resize;
	/**
	 *  Maintians an Event Observable for tracking scrolling within the open `Dropdown` list.
	 * @memberof Dropdown
	 */
	scroll;

	private onTouchedCallback: () => void = this._noop;

	/**
	 * Creates an instance of Dropdown.
	 * @param {ElementRef} elementRef
	 * @param {TranslateService} translate
	 * @memberof Dropdown
	 */
	constructor(private elementRef: ElementRef, private translate: TranslateService) {}

	/**
	 * Updates the `type` property in the `@ContentChild`.
	 * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
	 * @memberof Dropdown
	 */
	ngOnInit() {
		this.view.type = this.type;
	}

	/**
	 * Initializes classes and subscribes to events for single or multi selection.
	 * @memberof Dropdown
	 */
	ngAfterContentInit() {
		this.view.type = this.type;
		this.view.size = this.size;
		this.elementRef.nativeElement.classList.add(this.buildClass());
		this.view.select.subscribe(evt => {
			if (this.type === "single") {
				this.closeMenu();
				this.rootButton.nativeElement.focus();
			}
			if (this.type === "multi") {
				this.propagateChange(this.view.getSelected());
			} else {
				if (evt.item.selected) {
					this.propagateChange(evt.item);
				} else {
					this.propagateChange(null);
				}
			}
			this.select.emit(evt);
			this.selected.emit(evt);
		});
	}

	/**
	 * Retrieves the HTML Element for the dropdown and stores it locally.
	 * @memberof Dropdown
	 */
	ngAfterViewInit() {
		this.dropdown = this.elementRef.nativeElement.querySelector(".dropdown_menu");
	}

	/**
	 * Removing the `Dropdown` from the body if it is appended to the body.
	 * @memberof Dropdown
	 */
	ngOnDestroy() {
		if (this.appendToBody) {
			this._appendToDropdown();
		}
	}

	/**
	 * Build the style classes based on the size property of the `Dropdown`.
	 * @returns {string}
	 * @memberof Dropdown
	 */
	buildClass() {
		if (this.size === "sm") { return "dropdown--sm"; }
		if (this.size === "default") { return "dropdown"; }
		if (this.size === "lg") { return "dropdown--lg"; }
	}

	/**
	 * Propagates the injected `value`.
	 * @param {*} value
	 * @memberof Dropdown
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
		this.propagateChange = fn;
	}

	/**
	 * Registering the function injected to control the touch use of the `Dropdown`.
	 * @param {*} fn
	 * @memberof Dropdown
	 */
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	propagateChange = (_: any) => {};

	/**
	 * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
	 * @param {KeyboardEvent} ev
	 * @returns null
	 * @memberof Dropdown
	 */
	@HostListener("keydown", ["$event"])
	onKeyDown(ev: KeyboardEvent) {
		if (ev.key === "Escape" && !this.menuIsClosed) {
			ev.stopImmediatePropagation();  // don't unintentionally close other widgets that listen for Escape
		}
		if (ev.key === "Escape" || (ev.key === "ArrowUp" && ev.altKey)) {
			ev.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (ev.key === "ArrowDown" && ev.altKey) {
			ev.preventDefault();
			this.openMenu();
		}

		if (!this.menuIsClosed && ev.key === "Tab" && this.dropdown.contains(ev.target as Node)) {
			this.closeMenu();
		}

		if (!this.menuIsClosed && ev.key === "Tab" && ev.shiftKey) {
			this.closeMenu();
		}

		if (this.type === "multi") { return; }

		if (this.menuIsClosed) {
			this.closedDropdownNavigation(ev);
		}
	}

	closedDropdownNavigation(ev) {
		if (ev.key === "ArrowDown") {
			ev.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getNextItem();
			if (item) { item.selected = true; }
		} else if (ev.key === "ArrowUp") {
			ev.preventDefault();
			this.view.getCurrentItem().selected = false;
			let item = this.view.getPrevItem();
			if (item) { item.selected = true; }
		}
	}

	/**
	 * Returns the display value if there is no selection, otherwise the selection will be returned.
	 * @returns
	 * @memberof Dropdown
	 */
	getDisplayValue() {
		let selected = this.view.getSelected();
		if (selected && !this.displayValue) {
			if (this.type === "multi") {
				return this.translate.get("DROPDOWN.SELECTED", {number: selected.length});
			} else {
				return Observable.of(selected[0].content);
			}
		} else if (selected) {
			return Observable.of(this.displayValue);
		}
		return Observable.of(this.placeholder);
	}

	/**
	 * Returns `true` if there is a value selected.
	 * @returns {boolean}
	 * @memberof Dropdown
	 */
	valueSelected() {
		if (this.view.getSelected()) { return true; }
		return false;
	}

	_noop() {}
	/**
	 * Handles clicks outside of the `Dropdown`.
	 * @param {any} ev
	 * @memberof Dropdown
	 */
	_outsideClick(ev) {
		if (!this.elementRef.nativeElement.contains(ev.target) &&
			// if we're appendToBody the list isn't within the _elementRef,
			// so we've got to check if our target is possibly in there too.
			!this.dropdown.contains(ev.target)) {
			this.closeMenu();
		}
	}
	_outsideKey(ev) {
		if (!this.menuIsClosed && ev.key === "Tab" && this.dropdown.contains(ev.target as Node)) {
			this.closeMenu();
		}
	}
	/**
	 * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
	 * @param {KeyboardEvent} ev
	 * @memberof Dropdown
	 */
	_keyboardNav(ev: KeyboardEvent) {
		if (ev.key === "Escape" && !this.menuIsClosed) {
			ev.stopImmediatePropagation();  // don't unintentionally close modal if inside of it
		}
		if (ev.key === "Escape" || (ev.key === "ArrowUp" && ev.altKey)) {
			ev.preventDefault();
			this.closeMenu();
			this.rootButton.nativeElement.focus();
		} else if (!this.menuIsClosed && ev.key === "Tab") {
			// this way focus will start on the next focusable item from the dropdown
			// not the top of the body!
			this.rootButton.nativeElement.focus();
			this.rootButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key: "Tab"}));
			this.closeMenu();
		}
	}

	/**
	 * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
	 * @memberof Dropdown
	 */
	_appendToDropdown() {
		if (document.body.contains(this.dropdownWrapper)) {
			this.dropdown.style.display = "none";
			this.elementRef.nativeElement.appendChild(this.dropdown);
			document.body.removeChild(this.dropdownWrapper);
			this.resize.unsubscribe();
			this.dropdownWrapper.removeEventListener("keydown", this.keyboardNav, true);
		}
	}

	/**
	 * Creates the `Dropdown` list as an element that is appended to the DOM body.
	 * @memberof Dropdown
	 */
	_appendToBody() {
		const positionDropdown = () => {
			position.setElement(
				this.dropdownWrapper,
				position.addOffset(
					position.findAbsolute(this.elementRef.nativeElement, this.dropdownWrapper, "bottom"),
					window.scrollY,
					window.scrollX
				)
			);
		};
		this.dropdown.style.display = "block";
		this.dropdownWrapper = document.createElement("div");
		this.dropdownWrapper.className = "dropdown";
		this.dropdownWrapper.style.width = this.elementRef.nativeElement.offsetWidth + "px";
		this.dropdownWrapper.style.position = "absolute";
		this.dropdownWrapper.appendChild(this.dropdown);
		document.body.appendChild(this.dropdownWrapper);
		positionDropdown();
		this.dropdownWrapper.addEventListener("keydown", this.keyboardNav, true);
		this.resize = Observable.fromEvent(window, "resize")
			.throttleTime(100)
			.subscribe(() => positionDropdown());
	}

	/**
	 * Expands the dropdown menu in the view.
	 * @memberof Dropdown
	 */
	openMenu() {
		this.menuIsClosed = false;

		// move the dropdown list to the body if appendToBody is true
		// and position it relative to the dropdown wrapper
		if (this.appendToBody) {
			this.addScrollEventListener();
			this._appendToBody();
		}

		// we bind noop to document.body.firstElementChild to allow safari to fire events
		// from document. Then we unbind everything later to keep things light.
		document.body.firstElementChild.addEventListener("click", this.noop, true);
		document.body.firstElementChild.addEventListener("keydown", this.noop, true);
		document.addEventListener("click", this.outsideClick, true);
		document.addEventListener("keydown", this.outsideKey, true);
		setTimeout(() => this.view.getCurrentElement().focus(), 0);
	}

	/**
	 * Collapsing the dropdown menu and removing unnecessary `EventListeners`.
	 * @memberof Dropdown
	 */
	closeMenu() {
		this.menuIsClosed = true;
		this.onClose.emit();
		this.close.emit();

		// move the list back in the component on close
		if (this.appendToBody) {
			this.removeScrollEventListener();
			this._appendToDropdown();
		}
		document.body.firstElementChild.removeEventListener("click", this.noop, true);
		document.body.firstElementChild.removeEventListener("keydown", this.noop, true);
		document.removeEventListener("click", this.outsideClick, true);
		document.removeEventListener("keydown", this.outsideKey, true);
	}

	/**
	 * Add scroll event listenter if scrollableContainer is provided
	 * @memberof Dropdown
	 */
	addScrollEventListener() {
		if (this.scrollableContainer) {
			const container = document.querySelector(this.scrollableContainer);

			if (container) {
				this.scroll = Observable.fromEvent(container, "scroll")
				.subscribe(() => {
					if (this.isVisibleInContainer(this.elementRef.nativeElement, container)) {
						position.setElement(
							this.dropdownWrapper,
							position.addOffset(
								position.findRelative(this.elementRef.nativeElement, this.dropdownWrapper, "bottom"),
								-container.scrollTop
							)
						);
					} else {
						this.closeMenu();
					}
				});
			}
		}
	}

	/**
	 * Removes any `EventListeners` responsible for scroll functionality.
	 * @memberof Dropdown
	 */
	removeScrollEventListener() {
		if (this.scroll) {
			this.scroll.unsubscribe();
		}
	}

	/**
	 * Controls toggling menu states between open/expanded and closed/collapsed.
	 * @memberof Dropdown
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
	 * @param {any} elem
	 * @param {any} container
	 * @returns {boolean}
	 * @memberof Dropdown
	 */
	isVisibleInContainer(elem, container) {
		const containerTop = container.scrollTop;
		const containerBottom = containerTop + container.offsetHeight;
		const elemTop = elem.offsetTop + elem.offsetHeight;
		const elemBottom = elemTop;

		if ((elemBottom <= containerBottom) && (elemTop >= containerTop)) {
			return true;
		}

		return false;
	}
}
