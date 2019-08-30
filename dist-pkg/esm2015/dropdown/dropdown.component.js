/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ContentChild, ViewChild, HostListener, HostBinding, TemplateRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { fromEvent, of, merge } from "rxjs";
import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { I18n } from "./../i18n/i18n.module";
import { DropdownService } from "./dropdown.service";
import { scrollableParentsObservable, isVisibleInContainer } from "./../utils/scroll";
/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 * [See demo](../../?path=/story/dropdown--basic)
 *
 * <example-url>../../iframe.html?id=dropdown--basic</example-url>
 */
export class Dropdown {
    /**
     * Creates an instance of Dropdown.
     * @param {?} elementRef
     * @param {?} i18n
     * @param {?} dropdownService
     */
    constructor(elementRef, i18n, dropdownService) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.dropdownService = dropdownService;
        this.id = `dropdown-${Dropdown.dropdownCount++}`;
        /**
         * Value displayed if no item is selected.
         */
        this.placeholder = "";
        /**
         * The selected value from the `Dropdown`. Can be a string or template.
         */
        this.displayValue = "";
        /**
         * Size to render the dropdown field.
         */
        this.size = "md";
        /**
         * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * `light` or `dark` dropdown theme
         */
        this.theme = "dark";
        /**
         * Set to `true` to disable the dropdown.
         */
        this.disabled = false;
        /**
         * Set to `true` for a loading dropdown.
         */
        this.skeleton = false;
        /**
         * Set to `true` for an inline dropdown.
         */
        this.inline = false;
        /**
         * Set to `true` for a dropdown without arrow key activation.
         */
        this.disableArrowKeys = false;
        /**
         * set to `true` to place the dropdown view inline with the component
         */
        this.appendInline = false;
        /**
         * Accessible label for the button that opens the dropdown list.
         * Defaults to the `DROPDOWN.OPEN` value from the i18n service.
         */
        this.menuButtonLabel = this.i18n.get().DROPDOWN.OPEN;
        /**
         * Provides the label for the "# selected" text.
         * Defaults to the `DROPDOWN.SELECTED` value from the i18n service.
         */
        this.selectedLabel = this.i18n.get().DROPDOWN.SELECTED;
        /**
         * Emits selection events.
         */
        this.selected = new EventEmitter();
        /**
         * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
         */
        this.onClose = new EventEmitter();
        /**
         * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
         */
        this.close = new EventEmitter();
        this.hostClass = true;
        /**
         * Set to `true` if the dropdown is closed (not expanded).
         */
        this.menuIsClosed = true;
        /**
         * controls wether the `drop-up` class is applied
         */
        this.dropUp = false;
        // .bind creates a new function, so we declare the methods below
        // but .bind them up here
        this.noop = this._noop.bind(this);
        this.outsideClick = this._outsideClick.bind(this);
        this.outsideKey = this._outsideKey.bind(this);
        this.keyboardNav = this._keyboardNav.bind(this);
        this.onTouchedCallback = this._noop;
        this.propagateChange = (_) => { };
    }
    /**
     * Deprecated. Dropdown now defaults to appending inline
     * Set to `true` if the `Dropdown` is to be appended to the DOM body.
     * @param {?} v
     * @return {?}
     */
    set appendToBody(v) {
        console.log("`appendToBody` has been deprecated. Dropdowns now append to the body by default.");
        console.log("Ensure you have an `ibm-placeholder` in your app.");
        console.log("Use `appendInline` if you need to position your dropdowns within the normal page flow.");
        this.appendInline = !v;
    }
    /**
     * @return {?}
     */
    get appendToBody() {
        return !this.appendInline;
    }
    /**
     * Updates the `type` property in the `\@ContentChild`.
     * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
     * @return {?}
     */
    ngOnInit() {
        if (this.view) {
            this.view.type = this.type;
        }
    }
    /**
     * Initializes classes and subscribes to events for single or multi selection.
     * @return {?}
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
                    /** @type {?} */
                    const values = this.view.getSelected().map(item => item[this.value]);
                    this.propagateChange(values);
                    // otherwise just pass up the values from `getSelected`
                }
                else {
                    this.propagateChange(this.view.getSelected());
                }
            }
            else {
                this.closeMenu();
                if (event.item && event.item.selected) {
                    if (this.value) {
                        this.propagateChange(event.item[this.value]);
                    }
                    else {
                        this.propagateChange(event.item);
                    }
                }
                else {
                    this.propagateChange(null);
                }
            }
            // only emit selected for "organic" selections
            if (!event.isUpdate) {
                this.selected.emit(event);
            }
        });
    }
    /**
     * Removing the `Dropdown` from the body if it is appended to the body.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.appendToBody) {
            this._appendToDropdown();
        }
    }
    /**
     * Propagates the injected `value`.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        // propagate null/falsey as an array (deselect everything)
        if (!value) {
            this.view.propagateSelected([value]);
        }
        else if (this.type === "single") {
            if (this.value) {
                /** @type {?} */
                const newValue = Object.assign({}, this.view.getListItems().find(item => item[this.value] === value));
                newValue.selected = true;
                this.view.propagateSelected([newValue]);
            }
            else {
                // pass the singular value as an array of ListItem
                this.view.propagateSelected([value]);
            }
        }
        else {
            if (this.value) {
                /** @type {?} */
                const newValues = Array.from(this.view.getListItems(), item => Object.assign({}, item));
                for (const v of value) {
                    for (const newValue of newValues) {
                        if (newValue[this.value] === v) {
                            newValue.selected = true;
                        }
                    }
                }
                this.view.propagateSelected(newValues);
            }
            else {
                // we can safely assume we're passing an array of `ListItem`s
                this.view.propagateSelected(value);
            }
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registering the function injected to control the touch use of the `Dropdown`.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if ((event.key === "Escape" || event.key === "Esc") && !this.menuIsClosed) {
            event.stopImmediatePropagation(); // don't unintentionally close other widgets that listen for Escape
        }
        if (event.key === "Escape" || event.key === "Esc") {
            event.preventDefault();
            this.closeMenu();
            this.dropdownButton.nativeElement.focus();
        }
        else if (this.menuIsClosed && (event.key === " " || event.key === "ArrowDown" || event.key === "ArrowUp" ||
            event.key === "Spacebar" || event.key === "Down" || event.key === "Up")) {
            if (this.disableArrowKeys && (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Down" || event.key === "Up")) {
                return;
            }
            event.preventDefault();
            this.openMenu();
        }
        if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(/** @type {?} */ (event.target))) {
            this.closeMenu();
        }
        if (!this.menuIsClosed && event.key === "Tab" && event.shiftKey) {
            this.closeMenu();
        }
        if (this.type === "multi") {
            return;
        }
        if (this.menuIsClosed) {
            this.closedDropdownNavigation(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closedDropdownNavigation(event) {
        // "Down", and "Up" are IE specific values
        if (event.key === "ArrowDown" || event.key === "Down") {
            event.preventDefault();
            this.view.getCurrentItem().selected = false;
            /** @type {?} */
            let item = this.view.getNextItem();
            if (item) {
                item.selected = true;
            }
        }
        else if (event.key === "ArrowUp" || event.key === "Up") {
            event.preventDefault();
            this.view.getCurrentItem().selected = false;
            /** @type {?} */
            let item = this.view.getPrevItem();
            if (item) {
                item.selected = true;
            }
        }
    }
    /**
     * Returns the display value if there is a selection and displayValue is set,
     * if there is just a selection the ListItem content property will be returned,
     * otherwise the placeholder will be returned.
     * @return {?}
     */
    getDisplayStringValue() {
        if (!this.view) {
            return;
        }
        /** @type {?} */
        let selected = this.view.getSelected();
        if (selected && (!this.displayValue || !this.isRenderString())) {
            if (this.type === "multi") {
                return of(this.placeholder);
            }
            else {
                return of(selected[0].content);
            }
        }
        else if (selected && this.isRenderString()) {
            return of(/** @type {?} */ (this.displayValue));
        }
        return of(this.placeholder);
    }
    /**
     * @return {?}
     */
    isRenderString() {
        return typeof this.displayValue === "string";
    }
    /**
     * @return {?}
     */
    getRenderTemplateContext() {
        if (!this.view) {
            return;
        }
        /** @type {?} */
        let selected = this.view.getSelected();
        if (this.type === "multi") {
            return { items: selected };
        }
        else if (selected && selected.length > 0) {
            return { item: selected[0] }; // this is to be compatible with the dropdown-list template
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    getSelectedCount() {
        if (this.view.getSelected()) {
            return this.view.getSelected().length;
        }
    }
    /**
     * @return {?}
     */
    clearSelected() {
        for (const item of this.view.getListItems()) {
            item.selected = false;
        }
        this.selected.emit([]);
        this.propagateChange([]);
    }
    /**
     * Returns `true` if there is a value selected.
     * @return {?}
     */
    valueSelected() {
        if (this.view.getSelected()) {
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    _noop() { }
    /**
     * Handles clicks outside of the `Dropdown`.
     * @param {?} event
     * @return {?}
     */
    _outsideClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target) &&
            // if we're appendToBody the list isn't within the _elementRef,
            // so we've got to check if our target is possibly in there too.
            !this.dropdownMenu.nativeElement.contains(event.target)) {
            this.closeMenu();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _outsideKey(event) {
        if (!this.menuIsClosed && event.key === "Tab" && this.dropdownMenu.nativeElement.contains(/** @type {?} */ (event.target))) {
            this.closeMenu();
        }
    }
    /**
     * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
     * @param {?} event
     * @return {?}
     */
    _keyboardNav(event) {
        // "Esc" is an IE specific value
        if ((event.key === "Escape" || event.key === "Esc") && !this.menuIsClosed) {
            event.stopImmediatePropagation(); // don't unintentionally close modal if inside of it
        }
        if (event.key === "Escape" || event.key === "Esc") {
            event.preventDefault();
            this.closeMenu();
            this.dropdownButton.nativeElement.focus();
        }
        else if (!this.menuIsClosed && event.key === "Tab") {
            // this way focus will start on the next focusable item from the dropdown
            // not the top of the body!
            this.dropdownButton.nativeElement.focus();
            this.dropdownButton.nativeElement.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Tab" }));
            this.closeMenu();
        }
    }
    /**
     * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
     * @return {?}
     */
    _appendToDropdown() {
        this.dropdownService.appendToDropdown(this.elementRef.nativeElement);
        this.dropdownMenu.nativeElement.removeEventListener("keydown", this.keyboardNav, true);
    }
    /**
     * Creates the `Dropdown` list as an element that is appended to the DOM body.
     * @return {?}
     */
    _appendToBody() {
        this.dropdownService.appendToBody(this.dropdownButton.nativeElement, this.dropdownMenu.nativeElement, this.elementRef.nativeElement.className);
        this.dropdownMenu.nativeElement.addEventListener("keydown", this.keyboardNav, true);
    }
    /**
     * Expands the dropdown menu in the view.
     * @return {?}
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
            /** @type {?} */
            const menu = this.dropdownMenu.nativeElement;
            /** @type {?} */
            const boundingClientRect = menu.getBoundingClientRect();
            if (boundingClientRect.bottom > window.innerHeight) {
                // min height of 100px
                if (window.innerHeight - boundingClientRect.top > 100) {
                    // remove the conditional once this api is settled and part of abstract-dropdown-view.class
                    if (this.view["enableScroll"]) {
                        this.view["enableScroll"]();
                    }
                }
                else {
                    this.dropUp = true;
                }
            }
            else {
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
     * @return {?}
     */
    closeMenu() {
        // return early if the menu is already closed
        if (this.menuIsClosed) {
            return;
        }
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
     * @return {?}
     */
    addScrollEventListener() {
        /** @type {?} */
        let scrollObservable = scrollableParentsObservable(this.elementRef.nativeElement);
        if (this.scrollableContainer) {
            /** @type {?} */
            const container = document.querySelector(this.scrollableContainer);
            if (container) {
                scrollObservable = merge(scrollObservable, fromEvent(container, "scroll"));
            }
        }
        this.scroll = scrollObservable.subscribe(event => {
            if (isVisibleInContainer(this.elementRef.nativeElement, /** @type {?} */ (event.target))) {
                this.dropdownService.updatePosition(this.dropdownButton.nativeElement);
            }
            else {
                this.closeMenu();
            }
        });
    }
    /**
     * Removes any `EventListeners` responsible for scroll functionality.
     * @return {?}
     */
    removeScrollEventListener() {
        if (this.scroll) {
            this.scroll.unsubscribe();
        }
    }
    /**
     * Controls toggling menu states between open/expanded and closed/collapsed.
     * @return {?}
     */
    toggleMenu() {
        if (this.menuIsClosed) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
}
Dropdown.dropdownCount = 0;
Dropdown.decorators = [
    { type: Component, args: [{
                selector: "ibm-dropdown",
                template: `
	<label *ngIf="label" [for]="id" class="bx--label">
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
            }] }
];
/** @nocollapse */
Dropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: I18n },
    { type: DropdownService }
];
Dropdown.propDecorators = {
    id: [{ type: Input }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    placeholder: [{ type: Input }],
    displayValue: [{ type: Input }],
    size: [{ type: Input }],
    type: [{ type: Input }],
    theme: [{ type: Input }],
    disabled: [{ type: Input }],
    skeleton: [{ type: Input }],
    inline: [{ type: Input }],
    disableArrowKeys: [{ type: Input }],
    appendToBody: [{ type: Input }],
    appendInline: [{ type: Input }],
    scrollableContainer: [{ type: Input }],
    value: [{ type: Input }],
    menuButtonLabel: [{ type: Input }],
    selectedLabel: [{ type: Input }],
    selected: [{ type: Output }],
    onClose: [{ type: Output }],
    close: [{ type: Output }],
    view: [{ type: ContentChild, args: [AbstractDropdownView,] }],
    dropdownButton: [{ type: ViewChild, args: ["dropdownButton",] }],
    dropdownMenu: [{ type: ViewChild, args: ["dropdownMenu",] }],
    hostClass: [{ type: HostBinding, args: ["class.bx--dropdown__wrapper",] }],
    onKeyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }]
};
function Dropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    Dropdown.dropdownCount;
    /** @type {?} */
    Dropdown.prototype.id;
    /**
     * Label for the dropdown.
     * @type {?}
     */
    Dropdown.prototype.label;
    /**
     * Sets the optional helper text.
     * @type {?}
     */
    Dropdown.prototype.helperText;
    /**
     * Value displayed if no item is selected.
     * @type {?}
     */
    Dropdown.prototype.placeholder;
    /**
     * The selected value from the `Dropdown`. Can be a string or template.
     * @type {?}
     */
    Dropdown.prototype.displayValue;
    /**
     * Size to render the dropdown field.
     * @type {?}
     */
    Dropdown.prototype.size;
    /**
     * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
     * item selection.
     * @type {?}
     */
    Dropdown.prototype.type;
    /**
     * `light` or `dark` dropdown theme
     * @type {?}
     */
    Dropdown.prototype.theme;
    /**
     * Set to `true` to disable the dropdown.
     * @type {?}
     */
    Dropdown.prototype.disabled;
    /**
     * Set to `true` for a loading dropdown.
     * @type {?}
     */
    Dropdown.prototype.skeleton;
    /**
     * Set to `true` for an inline dropdown.
     * @type {?}
     */
    Dropdown.prototype.inline;
    /**
     * Set to `true` for a dropdown without arrow key activation.
     * @type {?}
     */
    Dropdown.prototype.disableArrowKeys;
    /**
     * set to `true` to place the dropdown view inline with the component
     * @type {?}
     */
    Dropdown.prototype.appendInline;
    /**
     * Query string for the element that contains the `Dropdown`.
     * Used to trigger closing the dropdown if it scrolls outside of the viewport of the `scrollableContainer`.
     * @type {?}
     */
    Dropdown.prototype.scrollableContainer;
    /**
     * Specifies the property to be used as the return value to `ngModel`
     * @type {?}
     */
    Dropdown.prototype.value;
    /**
     * Accessible label for the button that opens the dropdown list.
     * Defaults to the `DROPDOWN.OPEN` value from the i18n service.
     * @type {?}
     */
    Dropdown.prototype.menuButtonLabel;
    /**
     * Provides the label for the "# selected" text.
     * Defaults to the `DROPDOWN.SELECTED` value from the i18n service.
     * @type {?}
     */
    Dropdown.prototype.selectedLabel;
    /**
     * Emits selection events.
     * @type {?}
     */
    Dropdown.prototype.selected;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     * @type {?}
     */
    Dropdown.prototype.onClose;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     * @type {?}
     */
    Dropdown.prototype.close;
    /**
     * Maintains a reference to the `AbstractDropdownView` object within the content DOM.
     * @type {?}
     */
    Dropdown.prototype.view;
    /**
     * Maintains a reference to the view DOM element of the `Dropdown` button.
     * @type {?}
     */
    Dropdown.prototype.dropdownButton;
    /**
     * ViewChid of the dropdown view.
     * @type {?}
     */
    Dropdown.prototype.dropdownMenu;
    /** @type {?} */
    Dropdown.prototype.hostClass;
    /**
     * Set to `true` if the dropdown is closed (not expanded).
     * @type {?}
     */
    Dropdown.prototype.menuIsClosed;
    /**
     * controls wether the `drop-up` class is applied
     * @type {?}
     */
    Dropdown.prototype.dropUp;
    /** @type {?} */
    Dropdown.prototype.noop;
    /** @type {?} */
    Dropdown.prototype.outsideClick;
    /** @type {?} */
    Dropdown.prototype.outsideKey;
    /** @type {?} */
    Dropdown.prototype.keyboardNav;
    /**
     *  Maintians an Event Observable Subscription for tracking scrolling within the open `Dropdown` list.
     * @type {?}
     */
    Dropdown.prototype.scroll;
    /** @type {?} */
    Dropdown.prototype.onTouchedCallback;
    /** @type {?} */
    Dropdown.prototype.propagateChange;
    /** @type {?} */
    Dropdown.prototype.elementRef;
    /** @type {?} */
    Dropdown.prototype.i18n;
    /** @type {?} */
    Dropdown.prototype.dropdownService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUVaLFNBQVMsRUFFVCxZQUFZLEVBRVosV0FBVyxFQUNYLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBRU4sU0FBUyxFQUNULEVBQUUsRUFFRixLQUFLLEVBQ0wsTUFBTSxNQUFNLENBQUM7QUFFZCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7OztBQXdGdEYsTUFBTTs7Ozs7OztJQTBJTCxZQUFzQixVQUFzQixFQUFZLElBQVUsRUFBWSxlQUFnQztRQUF4RixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFZLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtrQkF4SWhHLFlBQVksUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFOzs7OzJCQVk3QixFQUFFOzs7OzRCQUkwQixFQUFFOzs7O29CQUlqQixJQUFJOzs7OztvQkFLSixRQUFROzs7O3FCQUlULE1BQU07Ozs7d0JBSXJCLEtBQUs7Ozs7d0JBSUwsS0FBSzs7OztzQkFJUCxLQUFLOzs7O2dDQUlLLEtBQUs7Ozs7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QUFDOzs7eUJBdmhCZCxDQUFDOztZQWhGeEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0VUO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsUUFBUTt3QkFDckIsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRDs7OztZQWpIQSxVQUFVO1lBdUJGLElBQUk7WUFFSixlQUFlOzs7aUJBMkZ0QixLQUFLO29CQUlMLEtBQUs7eUJBSUwsS0FBSzswQkFJTCxLQUFLOzJCQUlMLEtBQUs7bUJBSUwsS0FBSzttQkFLTCxLQUFLO29CQUlMLEtBQUs7dUJBSUwsS0FBSzt1QkFJTCxLQUFLO3FCQUlMLEtBQUs7K0JBSUwsS0FBSzsyQkFLTCxLQUFLOzJCQWFMLEtBQUs7a0NBS0wsS0FBSztvQkFJTCxLQUFLOzhCQUtMLEtBQUs7NEJBS0wsS0FBSzt1QkFJTCxNQUFNO3NCQUlOLE1BQU07b0JBSU4sTUFBTTttQkFLTixZQUFZLFNBQUMsb0JBQW9COzZCQUlqQyxTQUFTLFNBQUMsZ0JBQWdCOzJCQUkxQixTQUFTLFNBQUMsY0FBYzt3QkFFeEIsV0FBVyxTQUFDLDZCQUE2Qjt3QkErSXpDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0RWxlbWVudFJlZixcblx0Q29udGVudENoaWxkLFxuXHRPbkluaXQsXG5cdFZpZXdDaGlsZCxcblx0QWZ0ZXJDb250ZW50SW5pdCxcblx0SG9zdExpc3RlbmVyLFxuXHRPbkRlc3Ryb3ksXG5cdEhvc3RCaW5kaW5nLFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gT2JzZXJ2YWJsZSBpbXBvcnQgaXMgcmVxdWlyZWQgaGVyZSBzbyB0eXBlc2NyaXB0IGNhbiBjb21waWxlIGNvcnJlY3RseVxuaW1wb3J0IHtcblx0T2JzZXJ2YWJsZSxcblx0ZnJvbUV2ZW50LFxuXHRvZixcblx0U3Vic2NyaXB0aW9uLFxuXHRtZXJnZVxufSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duVmlldyB9IGZyb20gXCIuL2Fic3RyYWN0LWRyb3Bkb3duLXZpZXcuY2xhc3NcIjtcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSBcIkBjYXJib24vdXRpbHMtcG9zaXRpb25cIjtcbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCIuL2xpc3QtaXRlbS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gXCIuL2Ryb3Bkb3duLnNlcnZpY2VcIjtcbmltcG9ydCB7IHNjcm9sbGFibGVQYXJlbnRzT2JzZXJ2YWJsZSwgaXNWaXNpYmxlSW5Db250YWluZXIgfSBmcm9tIFwiLi8uLi91dGlscy9zY3JvbGxcIjtcblxuLyoqXG4gKiBEcm9wLWRvd24gbGlzdHMgZW5hYmxlIHVzZXJzIHRvIHNlbGVjdCBvbmUgb3IgbW9yZSBpdGVtcyBmcm9tIGEgbGlzdC5cbiAqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9kcm9wZG93bi0tYmFzaWMpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPWRyb3Bkb3duLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZHJvcGRvd25cIixcblx0dGVtcGxhdGU6IGBcblx0PGxhYmVsICpuZ0lmPVwibGFiZWxcIiBbZm9yXT1cImlkXCIgY2xhc3M9XCJieC0tbGFiZWxcIj5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUobGFiZWwpXCI+e3tsYWJlbH19PC9uZy1jb250YWluZXI+XG5cdFx0PG5nLXRlbXBsYXRlICpuZ0lmPVwiaXNUZW1wbGF0ZShsYWJlbClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJsYWJlbFwiPjwvbmctdGVtcGxhdGU+XG5cdDwvbGFiZWw+XG5cdDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0XCIgY2xhc3M9XCJieC0tZm9ybV9faGVscGVyLXRleHRcIj5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUoaGVscGVyVGV4dClcIj57e2hlbHBlclRleHR9fTwvbmctY29udGFpbmVyPlxuXHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUoaGVscGVyVGV4dClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJoZWxwZXJUZXh0XCI+PC9uZy10ZW1wbGF0ZT5cblx0PC9kaXY+XG5cdDxkaXZcblx0XHRbaWRdPVwiaWRcIlxuXHRcdGNsYXNzPVwiYngtLWRyb3Bkb3duIGJ4LS1saXN0LWJveFwiXG5cdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0J2J4LS1kcm9wZG93bi0tbGlnaHQnOiB0aGVtZSA9PT0gJ2xpZ2h0Jyxcblx0XHRcdCdieC0tbGlzdC1ib3gtLWlubGluZSc6IGlubGluZSxcblx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvbixcblx0XHRcdCdieC0tZHJvcGRvd24tLWRpc2FibGVkIGJ4LS1saXN0LWJveC0tZGlzYWJsZWQnOiBkaXNhYmxlZFxuXHRcdH1cIj5cblx0XHQ8YnV0dG9uXG5cdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdCNkcm9wZG93bkJ1dHRvblxuXHRcdFx0Y2xhc3M9XCJieC0tbGlzdC1ib3hfX2ZpZWxkXCJcblx0XHRcdFtuZ0NsYXNzXT1cInsnYSc6ICFtZW51SXNDbG9zZWR9XCJcblx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIW1lbnVJc0Nsb3NlZFwiXG5cdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdChjbGljayk9XCJ0b2dnbGVNZW51KClcIlxuXHRcdFx0KGJsdXIpPVwib25CbHVyKClcIlxuXHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdChjbGljayk9XCJjbGVhclNlbGVjdGVkKClcIlxuXHRcdFx0XHQqbmdJZj1cInR5cGUgPT09ICdtdWx0aScgJiYgZ2V0U2VsZWN0ZWRDb3VudCgpID4gMFwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLWxpc3QtYm94X19zZWxlY3Rpb24tLW11bHRpXCJcblx0XHRcdFx0dGl0bGU9XCJDbGVhciBhbGwgc2VsZWN0ZWQgaXRlbXNcIj5cblx0XHRcdFx0e3tnZXRTZWxlY3RlZENvdW50KCl9fVxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRzdHlsZT1cIndpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XCJcblx0XHRcdFx0XHRyb2xlPVwiaW1nXCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR3aWR0aD1cIjE2XCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIxNlwiXG5cdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxNiAxNlwiXG5cdFx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xMiA0LjdsLS43LS43TDggNy4zIDQuNyA0bC0uNy43TDcuMyA4IDQgMTEuM2wuNy43TDggOC43bDMuMyAzLjMuNy0uN0w4LjcgOHpcIj48L3BhdGg+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3BhbiAqbmdJZj1cImlzUmVuZGVyU3RyaW5nKClcIiBjbGFzcz1cImJ4LS1saXN0LWJveF9fbGFiZWxcIj57e2dldERpc3BsYXlTdHJpbmdWYWx1ZSgpIHwgYXN5bmN9fTwvc3Bhbj5cblx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHQqbmdJZj1cIiFpc1JlbmRlclN0cmluZygpXCJcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImdldFJlbmRlclRlbXBsYXRlQ29udGV4dCgpXCJcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwiZGlzcGxheVZhbHVlXCI+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PGlibS1pY29uLWNoZXZyb24tZG93bjE2XG5cdFx0XHRcdCpuZ0lmPVwiIXNrZWxldG9uXCJcblx0XHRcdFx0Y2xhc3M9XCJieC0tbGlzdC1ib3hfX21lbnUtaWNvblwiXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwibWVudUJ1dHRvbkxhYmVsXCJcblx0XHRcdFx0W25nQ2xhc3NdPVwieydieC0tbGlzdC1ib3hfX21lbnUtaWNvbi0tb3Blbic6ICFtZW51SXNDbG9zZWQgfVwiPlxuXHRcdFx0PC9pYm0taWNvbi1jaGV2cm9uLWRvd24xNj5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8ZGl2XG5cdFx0XHQjZHJvcGRvd25NZW51XG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdkcm9wLXVwJzogZHJvcFVwXG5cdFx0XHR9XCI+XG5cdFx0XHQ8bmctY29udGVudCAqbmdJZj1cIiFtZW51SXNDbG9zZWRcIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBEcm9wZG93bixcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXHRzdGF0aWMgZHJvcGRvd25Db3VudCA9IDA7XG5cdEBJbnB1dCgpIGlkID0gYGRyb3Bkb3duLSR7RHJvcGRvd24uZHJvcGRvd25Db3VudCsrfWA7XG5cdC8qKlxuXHQgKiBMYWJlbCBmb3IgdGhlIGRyb3Bkb3duLlxuXHQgKi9cblx0QElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBvcHRpb25hbCBoZWxwZXIgdGV4dC5cblx0ICovXG5cdEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBWYWx1ZSBkaXNwbGF5ZWQgaWYgbm8gaXRlbSBpcyBzZWxlY3RlZC5cblx0ICovXG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJcIjtcblx0LyoqXG5cdCAqIFRoZSBzZWxlY3RlZCB2YWx1ZSBmcm9tIHRoZSBgRHJvcGRvd25gLiBDYW4gYmUgYSBzdHJpbmcgb3IgdGVtcGxhdGUuXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSBcIlwiO1xuXHQvKipcblx0ICogU2l6ZSB0byByZW5kZXIgdGhlIGRyb3Bkb3duIGZpZWxkLlxuXHQgKi9cblx0QElucHV0KCkgc2l6ZTogXCJzbVwiIHwgXCJtZFwiIHwgXCJsZ1wiID0gXCJtZFwiO1xuXHQvKipcblx0ICogRGVmaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYERyb3Bkb3duYCBzdXBwb3J0cyBzZWxlY3RpbmcgbXVsdGlwbGUgaXRlbXMgYXMgb3Bwb3NlZCB0byBzaW5nbGVcblx0ICogaXRlbSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRASW5wdXQoKSB0eXBlOiBcInNpbmdsZVwiIHwgXCJtdWx0aVwiID0gXCJzaW5nbGVcIjtcblx0LyoqXG5cdCAqIGBsaWdodGAgb3IgYGRhcmtgIGRyb3Bkb3duIHRoZW1lXG5cdCAqL1xuXHRASW5wdXQoKSB0aGVtZTogXCJsaWdodFwiIHwgXCJkYXJrXCIgPSBcImRhcmtcIjtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gZGlzYWJsZSB0aGUgZHJvcGRvd24uXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBsb2FkaW5nIGRyb3Bkb3duLlxuXHQgKi9cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGFuIGlubGluZSBkcm9wZG93bi5cblx0ICovXG5cdEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBkcm9wZG93biB3aXRob3V0IGFycm93IGtleSBhY3RpdmF0aW9uLlxuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZUFycm93S2V5cyA9IGZhbHNlO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZC4gRHJvcGRvd24gbm93IGRlZmF1bHRzIHRvIGFwcGVuZGluZyBpbmxpbmVcblx0ICogU2V0IHRvIGB0cnVlYCBpZiB0aGUgYERyb3Bkb3duYCBpcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NIGJvZHkuXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgYXBwZW5kVG9Cb2R5ICh2KSB7XG5cdFx0Y29uc29sZS5sb2coXCJgYXBwZW5kVG9Cb2R5YCBoYXMgYmVlbiBkZXByZWNhdGVkLiBEcm9wZG93bnMgbm93IGFwcGVuZCB0byB0aGUgYm9keSBieSBkZWZhdWx0LlwiKTtcblx0XHRjb25zb2xlLmxvZyhcIkVuc3VyZSB5b3UgaGF2ZSBhbiBgaWJtLXBsYWNlaG9sZGVyYCBpbiB5b3VyIGFwcC5cIik7XG5cdFx0Y29uc29sZS5sb2coXCJVc2UgYGFwcGVuZElubGluZWAgaWYgeW91IG5lZWQgdG8gcG9zaXRpb24geW91ciBkcm9wZG93bnMgd2l0aGluIHRoZSBub3JtYWwgcGFnZSBmbG93LlwiKTtcblx0XHR0aGlzLmFwcGVuZElubGluZSA9ICF2O1xuXHR9XG5cblx0Z2V0IGFwcGVuZFRvQm9keSgpIHtcblx0XHRyZXR1cm4gIXRoaXMuYXBwZW5kSW5saW5lO1xuXHR9XG5cdC8qKlxuXHQgKiBzZXQgdG8gYHRydWVgIHRvIHBsYWNlIHRoZSBkcm9wZG93biB2aWV3IGlubGluZSB3aXRoIHRoZSBjb21wb25lbnRcblx0ICovXG5cdEBJbnB1dCgpIGFwcGVuZElubGluZSA9IGZhbHNlO1xuXHQvKipcblx0ICogUXVlcnkgc3RyaW5nIGZvciB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBgRHJvcGRvd25gLlxuXHQgKiBVc2VkIHRvIHRyaWdnZXIgY2xvc2luZyB0aGUgZHJvcGRvd24gaWYgaXQgc2Nyb2xscyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCBvZiB0aGUgYHNjcm9sbGFibGVDb250YWluZXJgLlxuXHQgKi9cblx0QElucHV0KCkgc2Nyb2xsYWJsZUNvbnRhaW5lcjogc3RyaW5nO1xuXHQvKipcblx0ICogU3BlY2lmaWVzIHRoZSBwcm9wZXJ0eSB0byBiZSB1c2VkIGFzIHRoZSByZXR1cm4gdmFsdWUgdG8gYG5nTW9kZWxgXG5cdCAqL1xuXHRASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXHQvKipcblx0ICogQWNjZXNzaWJsZSBsYWJlbCBmb3IgdGhlIGJ1dHRvbiB0aGF0IG9wZW5zIHRoZSBkcm9wZG93biBsaXN0LlxuXHQgKiBEZWZhdWx0cyB0byB0aGUgYERST1BET1dOLk9QRU5gIHZhbHVlIGZyb20gdGhlIGkxOG4gc2VydmljZS5cblx0ICovXG5cdEBJbnB1dCgpIG1lbnVCdXR0b25MYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5EUk9QRE9XTi5PUEVOO1xuXHQvKipcblx0ICogUHJvdmlkZXMgdGhlIGxhYmVsIGZvciB0aGUgXCIjIHNlbGVjdGVkXCIgdGV4dC5cblx0ICogRGVmYXVsdHMgdG8gdGhlIGBEUk9QRE9XTi5TRUxFQ1RFRGAgdmFsdWUgZnJvbSB0aGUgaTE4biBzZXJ2aWNlLlxuXHQgKi9cblx0QElucHV0KCkgc2VsZWN0ZWRMYWJlbCA9IHRoaXMuaTE4bi5nZXQoKS5EUk9QRE9XTi5TRUxFQ1RFRDtcblx0LyoqXG5cdCAqIEVtaXRzIHNlbGVjdGlvbiBldmVudHMuXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG5cdC8qKlxuXHQgKiBFbWl0cyBldmVudCBub3RpZnlpbmcgdG8gb3RoZXIgY2xhc3NlcyB0aGF0IHRoZSBgRHJvcGRvd25gIGhhcyBiZWVuIGNsb3NlZCAoY29sbGFwc2VkKS5cblx0ICovXG5cdEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHQvKipcblx0ICogRW1pdHMgZXZlbnQgbm90aWZ5aW5nIHRvIG90aGVyIGNsYXNzZXMgdGhhdCB0aGUgYERyb3Bkb3duYCBoYXMgYmVlbiBjbG9zZWQgKGNvbGxhcHNlZCkuXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0LyoqXG5cdCAqIE1haW50YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgYEFic3RyYWN0RHJvcGRvd25WaWV3YCBvYmplY3Qgd2l0aGluIHRoZSBjb250ZW50IERPTS5cblx0ICovXG5cdEBDb250ZW50Q2hpbGQoQWJzdHJhY3REcm9wZG93blZpZXcpIHZpZXc6IEFic3RyYWN0RHJvcGRvd25WaWV3O1xuXHQvKipcblx0ICogTWFpbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3IERPTSBlbGVtZW50IG9mIHRoZSBgRHJvcGRvd25gIGJ1dHRvbi5cblx0ICovXG5cdEBWaWV3Q2hpbGQoXCJkcm9wZG93bkJ1dHRvblwiKSBkcm9wZG93bkJ1dHRvbjtcblx0LyoqXG5cdCAqIFZpZXdDaGlkIG9mIHRoZSBkcm9wZG93biB2aWV3LlxuXHQgKi9cblx0QFZpZXdDaGlsZChcImRyb3Bkb3duTWVudVwiKSBkcm9wZG93bk1lbnU7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWRyb3Bkb3duX193cmFwcGVyXCIpIGhvc3RDbGFzcyA9IHRydWU7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGlmIHRoZSBkcm9wZG93biBpcyBjbG9zZWQgKG5vdCBleHBhbmRlZCkuXG5cdCAqL1xuXHRtZW51SXNDbG9zZWQgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBjb250cm9scyB3ZXRoZXIgdGhlIGBkcm9wLXVwYCBjbGFzcyBpcyBhcHBsaWVkXG5cdCAqL1xuXHRkcm9wVXAgPSBmYWxzZTtcblxuXHQvLyAuYmluZCBjcmVhdGVzIGEgbmV3IGZ1bmN0aW9uLCBzbyB3ZSBkZWNsYXJlIHRoZSBtZXRob2RzIGJlbG93XG5cdC8vIGJ1dCAuYmluZCB0aGVtIHVwIGhlcmVcblx0bm9vcCA9IHRoaXMuX25vb3AuYmluZCh0aGlzKTtcblx0b3V0c2lkZUNsaWNrID0gdGhpcy5fb3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG5cdG91dHNpZGVLZXkgPSB0aGlzLl9vdXRzaWRlS2V5LmJpbmQodGhpcyk7XG5cdGtleWJvYXJkTmF2ID0gdGhpcy5fa2V5Ym9hcmROYXYuYmluZCh0aGlzKTtcblx0LyoqXG5cdCAqICBNYWludGlhbnMgYW4gRXZlbnQgT2JzZXJ2YWJsZSBTdWJzY3JpcHRpb24gZm9yIHRyYWNraW5nIHNjcm9sbGluZyB3aXRoaW4gdGhlIG9wZW4gYERyb3Bkb3duYCBsaXN0LlxuXHQgKi9cblx0c2Nyb2xsOiBTdWJzY3JpcHRpb247XG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gdGhpcy5fbm9vcDtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEcm9wZG93bi5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgaTE4bjogSTE4biwgcHJvdGVjdGVkIGRyb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlKSB7fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBgdHlwZWAgcHJvcGVydHkgaW4gdGhlIGBAQ29udGVudENoaWxkYC5cblx0ICogVGhlIGB0eXBlYCBwcm9wZXJ0eSBzcGVjaWZpZXMgd2hldGhlciB0aGUgYERyb3Bkb3duYCBhbGxvd3Mgc2luZ2xlIHNlbGVjdGlvbiBvciBtdWx0aSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy52aWV3KSB7XG5cdFx0XHR0aGlzLnZpZXcudHlwZSA9IHRoaXMudHlwZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgY2xhc3NlcyBhbmQgc3Vic2NyaWJlcyB0byBldmVudHMgZm9yIHNpbmdsZSBvciBtdWx0aSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0aWYgKCF0aGlzLnZpZXcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3LnR5cGUgPSB0aGlzLnR5cGU7XG5cdFx0dGhpcy52aWV3LnNpemUgPSB0aGlzLnNpemU7XG5cdFx0dGhpcy52aWV3LnNlbGVjdC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJtdWx0aVwiKSB7XG5cdFx0XHRcdC8vIGlmIHdlIGhhdmUgYSBgdmFsdWVgIHNlbGVjdG9yIGFuZCBzZWxlY3RlZCBpdGVtcyBtYXAgdGhlbSBhcHByb3BlcmlhdGx5XG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmlldy5nZXRTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52aWV3LmdldFNlbGVjdGVkKCkubWFwKGl0ZW0gPT4gaXRlbVt0aGlzLnZhbHVlXSk7XG5cdFx0XHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodmFsdWVzKTtcblx0XHRcdFx0Ly8gb3RoZXJ3aXNlIGp1c3QgcGFzcyB1cCB0aGUgdmFsdWVzIGZyb20gYGdldFNlbGVjdGVkYFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmlldy5nZXRTZWxlY3RlZCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdFx0aWYgKGV2ZW50Lml0ZW0gJiYgZXZlbnQuaXRlbS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShldmVudC5pdGVtW3RoaXMudmFsdWVdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UoZXZlbnQuaXRlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBvbmx5IGVtaXQgc2VsZWN0ZWQgZm9yIFwib3JnYW5pY1wiIHNlbGVjdGlvbnNcblx0XHRcdGlmICghZXZlbnQuaXNVcGRhdGUpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZC5lbWl0KGV2ZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmluZyB0aGUgYERyb3Bkb3duYCBmcm9tIHRoZSBib2R5IGlmIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBib2R5LlxuXHQgKi9cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG5cdFx0XHR0aGlzLl9hcHBlbmRUb0Ryb3Bkb3duKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFByb3BhZ2F0ZXMgdGhlIGluamVjdGVkIGB2YWx1ZWAuXG5cdCAqL1xuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHQvLyBwcm9wYWdhdGUgbnVsbC9mYWxzZXkgYXMgYW4gYXJyYXkgKGRlc2VsZWN0IGV2ZXJ5dGhpbmcpXG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKFt2YWx1ZV0pO1xuXHRcdH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBcInNpbmdsZVwiKSB7XG5cdFx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0XHQvLyBjbG9uZSB0aGUgc3BlY2lmaWVkIGl0ZW0gYW5kIHVwZGF0ZSBpdHMgc3RhdGVcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZpZXcuZ2V0TGlzdEl0ZW1zKCkuZmluZChpdGVtID0+IGl0ZW1bdGhpcy52YWx1ZV0gPT09IHZhbHVlKSk7XG5cdFx0XHRcdG5ld1ZhbHVlLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKFtuZXdWYWx1ZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcGFzcyB0aGUgc2luZ3VsYXIgdmFsdWUgYXMgYW4gYXJyYXkgb2YgTGlzdEl0ZW1cblx0XHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKFt2YWx1ZV0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy52YWx1ZSkge1xuXHRcdFx0XHQvLyBjbG9uZSB0aGUgaXRlbXMgYW5kIHVwZGF0ZSB0aGVpciBzdGF0ZSBiYXNlZCBvbiB0aGUgcmVjZWl2ZWQgdmFsdWUgYXJyYXlcblx0XHRcdFx0Ly8gdGhpcyB3YXkgd2UgZG9uJ3QgbG9zZSBhbnkgYWRkaXRpb25hbCBtZXRhZGF0YSB0aGF0IG1heSBiZSBwYXNzZWQgaW4gdmlldyB0aGUgYGl0ZW1zYCBJbnB1dFxuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMudmlldy5nZXRMaXN0SXRlbXMoKSwgaXRlbSA9PiBPYmplY3QuYXNzaWduKHt9LCBpdGVtKSk7XG5cdFx0XHRcdGZvciAoY29uc3QgdiBvZiB2YWx1ZSkge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgbmV3VmFsdWUgb2YgbmV3VmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3VmFsdWVbdGhpcy52YWx1ZV0gPT09IHYpIHtcblx0XHRcdFx0XHRcdFx0bmV3VmFsdWUuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnZpZXcucHJvcGFnYXRlU2VsZWN0ZWQobmV3VmFsdWVzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHdlIGNhbiBzYWZlbHkgYXNzdW1lIHdlJ3JlIHBhc3NpbmcgYW4gYXJyYXkgb2YgYExpc3RJdGVtYHNcblx0XHRcdFx0dGhpcy52aWV3LnByb3BhZ2F0ZVNlbGVjdGVkKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvbkJsdXIoKSB7XG5cdFx0dGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcmluZyB0aGUgZnVuY3Rpb24gaW5qZWN0ZWQgdG8gY29udHJvbCB0aGUgdG91Y2ggdXNlIG9mIHRoZSBgRHJvcGRvd25gLlxuXHQgKi9cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcblx0fVxuXG5cdHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdC8qKlxuXHQgKiBBZGRzIGtleWJvYXJkIGZ1bmN0aW9uYWxpdHkgZm9yIG5hdmlnYXRpb24sIHNlbGVjdGlvbiBhbmQgY2xvc2luZyBvZiB0aGUgYERyb3Bkb3duYC5cblx0ICovXG5cdEBIb3N0TGlzdGVuZXIoXCJrZXlkb3duXCIsIFtcIiRldmVudFwiXSlcblx0Ly8gXCJFc2NcIiwgXCJTcGFjZWJhclwiLCBcIkRvd25cIiwgYW5kIFwiVXBcIiBhcmUgSUUgc3BlY2lmaWMgdmFsdWVzXG5cdG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGlmICgoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJFc2NcIikgJiYgIXRoaXMubWVudUlzQ2xvc2VkKSB7XG5cdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgIC8vIGRvbid0IHVuaW50ZW50aW9uYWxseSBjbG9zZSBvdGhlciB3aWRnZXRzIHRoYXQgbGlzdGVuIGZvciBFc2NhcGVcblx0XHR9XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiRXNjXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0dGhpcy5kcm9wZG93bkJ1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLm1lbnVJc0Nsb3NlZCAmJiAoZXZlbnQua2V5ID09PSBcIiBcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIgfHwgZXZlbnQua2V5ID09PSBcIkFycm93VXBcIiB8fFxuXHRcdFx0ZXZlbnQua2V5ID09PSBcIlNwYWNlYmFyXCIgfHwgZXZlbnQua2V5ID09PSBcIkRvd25cIiB8fCBldmVudC5rZXkgPT09IFwiVXBcIikpIHtcblx0XHRcdGlmICh0aGlzLmRpc2FibGVBcnJvd0tleXMgJiYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiIHx8IGV2ZW50LmtleSA9PT0gXCJEb3duXCIgfHwgZXZlbnQua2V5ID09PSBcIlVwXCIpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLm1lbnVJc0Nsb3NlZCAmJiBldmVudC5rZXkgPT09IFwiVGFiXCIgJiYgdGhpcy5kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcblx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLm1lbnVJc0Nsb3NlZCAmJiBldmVudC5rZXkgPT09IFwiVGFiXCIgJiYgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudHlwZSA9PT0gXCJtdWx0aVwiKSB7IHJldHVybjsgfVxuXG5cdFx0aWYgKHRoaXMubWVudUlzQ2xvc2VkKSB7XG5cdFx0XHR0aGlzLmNsb3NlZERyb3Bkb3duTmF2aWdhdGlvbihldmVudCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2VkRHJvcGRvd25OYXZpZ2F0aW9uKGV2ZW50KSB7XG5cdFx0Ly8gXCJEb3duXCIsIGFuZCBcIlVwXCIgYXJlIElFIHNwZWNpZmljIHZhbHVlc1xuXHRcdGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIgfHwgZXZlbnQua2V5ID09PSBcIkRvd25cIikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMudmlldy5nZXRDdXJyZW50SXRlbSgpLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRsZXQgaXRlbSA9IHRoaXMudmlldy5nZXROZXh0SXRlbSgpO1xuXHRcdFx0aWYgKGl0ZW0pIHsgaXRlbS5zZWxlY3RlZCA9IHRydWU7IH1cblx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIgfHwgZXZlbnQua2V5ID09PSBcIlVwXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnZpZXcuZ2V0Q3VycmVudEl0ZW0oKS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnZpZXcuZ2V0UHJldkl0ZW0oKTtcblx0XHRcdGlmIChpdGVtKSB7IGl0ZW0uc2VsZWN0ZWQgPSB0cnVlOyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGRpc3BsYXkgdmFsdWUgaWYgdGhlcmUgaXMgYSBzZWxlY3Rpb24gYW5kIGRpc3BsYXlWYWx1ZSBpcyBzZXQsXG5cdCAqIGlmIHRoZXJlIGlzIGp1c3QgYSBzZWxlY3Rpb24gdGhlIExpc3RJdGVtIGNvbnRlbnQgcHJvcGVydHkgd2lsbCBiZSByZXR1cm5lZCxcblx0ICogb3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0Z2V0RGlzcGxheVN0cmluZ1ZhbHVlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0aWYgKCF0aGlzLnZpZXcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHNlbGVjdGVkID0gdGhpcy52aWV3LmdldFNlbGVjdGVkKCk7XG5cdFx0aWYgKHNlbGVjdGVkICYmICghdGhpcy5kaXNwbGF5VmFsdWUgfHwgIXRoaXMuaXNSZW5kZXJTdHJpbmcoKSkpIHtcblx0XHRcdGlmICh0aGlzLnR5cGUgPT09IFwibXVsdGlcIikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5wbGFjZWhvbGRlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2Yoc2VsZWN0ZWRbMF0uY29udGVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZCAmJiB0aGlzLmlzUmVuZGVyU3RyaW5nKCkpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmRpc3BsYXlWYWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gb2YodGhpcy5wbGFjZWhvbGRlcik7XG5cdH1cblxuXHRpc1JlbmRlclN0cmluZygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHRoaXMuZGlzcGxheVZhbHVlID09PSBcInN0cmluZ1wiO1xuXHR9XG5cblx0Z2V0UmVuZGVyVGVtcGxhdGVDb250ZXh0KCkge1xuXHRcdGlmICghdGhpcy52aWV3KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBzZWxlY3RlZCA9IHRoaXMudmlldy5nZXRTZWxlY3RlZCgpO1xuXHRcdGlmICh0aGlzLnR5cGUgPT09IFwibXVsdGlcIikge1xuXHRcdFx0cmV0dXJuIHtpdGVtczogc2VsZWN0ZWR9O1xuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHtpdGVtOiBzZWxlY3RlZFswXX07IC8vIHRoaXMgaXMgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHRoZSBkcm9wZG93bi1saXN0IHRlbXBsYXRlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cdH1cblxuXHRnZXRTZWxlY3RlZENvdW50KCk6IG51bWJlciB7XG5cdFx0aWYgKHRoaXMudmlldy5nZXRTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3LmdldFNlbGVjdGVkKCkubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyU2VsZWN0ZWQoKSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMudmlldy5nZXRMaXN0SXRlbXMoKSkge1xuXHRcdFx0aXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNlbGVjdGVkLmVtaXQoW10pO1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSBpcyBhIHZhbHVlIHNlbGVjdGVkLlxuXHQgKi9cblx0dmFsdWVTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy52aWV3LmdldFNlbGVjdGVkKCkpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRfbm9vcCgpIHt9XG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBgRHJvcGRvd25gLlxuXHQgKi9cblx0X291dHNpZGVDbGljayhldmVudCkge1xuXHRcdGlmICghdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuXHRcdFx0Ly8gaWYgd2UncmUgYXBwZW5kVG9Cb2R5IHRoZSBsaXN0IGlzbid0IHdpdGhpbiB0aGUgX2VsZW1lbnRSZWYsXG5cdFx0XHQvLyBzbyB3ZSd2ZSBnb3QgdG8gY2hlY2sgaWYgb3VyIHRhcmdldCBpcyBwb3NzaWJseSBpbiB0aGVyZSB0b28uXG5cdFx0XHQhdGhpcy5kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdH1cblx0fVxuXHRfb3V0c2lkZUtleShldmVudCkge1xuXHRcdGlmICghdGhpcy5tZW51SXNDbG9zZWQgJiYgZXZlbnQua2V5ID09PSBcIlRhYlwiICYmIHRoaXMuZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpKSB7XG5cdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogSGFuZGxlcyBrZXlib2FyZCBldmVudHMgc28gdXNlcnMgYXJlIGNvbnRyb2xsaW5nIHRoZSBgRHJvcGRvd25gIGluc3RlYWQgb2YgdW5pbnRlbnRpb25hbGx5IGNvbnRyb2xsaW5nIG91dHNpZGUgZWxlbWVudHMuXG5cdCAqL1xuXHRfa2V5Ym9hcmROYXYoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHQvLyBcIkVzY1wiIGlzIGFuIElFIHNwZWNpZmljIHZhbHVlXG5cdFx0aWYgKChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXZlbnQua2V5ID09PSBcIkVzY1wiKSAmJiAhdGhpcy5tZW51SXNDbG9zZWQpIHtcblx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyAgLy8gZG9uJ3QgdW5pbnRlbnRpb25hbGx5IGNsb3NlIG1vZGFsIGlmIGluc2lkZSBvZiBpdFxuXHRcdH1cblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJFc2NcIikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR0aGlzLmRyb3Bkb3duQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLm1lbnVJc0Nsb3NlZCAmJiBldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcblx0XHRcdC8vIHRoaXMgd2F5IGZvY3VzIHdpbGwgc3RhcnQgb24gdGhlIG5leHQgZm9jdXNhYmxlIGl0ZW0gZnJvbSB0aGUgZHJvcGRvd25cblx0XHRcdC8vIG5vdCB0aGUgdG9wIG9mIHRoZSBib2R5IVxuXHRcdFx0dGhpcy5kcm9wZG93bkJ1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmRyb3Bkb3duQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGtleTogXCJUYWJcIn0pKTtcblx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGBEcm9wZG93bmAgbGlzdCBhcHBlbmRpbmcgaXQgdG8gdGhlIGRyb3Bkb3duIHBhcmVudCBvYmplY3QgaW5zdGVhZCBvZiB0aGUgYm9keS5cblx0ICovXG5cdF9hcHBlbmRUb0Ryb3Bkb3duKCkge1xuXHRcdHRoaXMuZHJvcGRvd25TZXJ2aWNlLmFwcGVuZFRvRHJvcGRvd24odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlib2FyZE5hdiwgdHJ1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYERyb3Bkb3duYCBsaXN0IGFzIGFuIGVsZW1lbnQgdGhhdCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NIGJvZHkuXG5cdCAqL1xuXHRfYXBwZW5kVG9Cb2R5KCkge1xuXHRcdHRoaXMuZHJvcGRvd25TZXJ2aWNlLmFwcGVuZFRvQm9keShcblx0XHRcdHRoaXMuZHJvcGRvd25CdXR0b24ubmF0aXZlRWxlbWVudCxcblx0XHRcdHRoaXMuZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc05hbWUpO1xuXHRcdHRoaXMuZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlib2FyZE5hdiwgdHJ1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kcyB0aGUgZHJvcGRvd24gbWVudSBpbiB0aGUgdmlldy5cblx0ICovXG5cdG9wZW5NZW51KCkge1xuXHRcdHRoaXMubWVudUlzQ2xvc2VkID0gZmFsc2U7XG5cblx0XHQvLyBtb3ZlIHRoZSBkcm9wZG93biBsaXN0IHRvIHRoZSBib2R5IGlmIHdlJ3JlIG5vdCBhcHBlbmRpbmcgaW5saW5lXG5cdFx0Ly8gYW5kIHBvc2l0aW9uIGl0IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB3cmFwcGVyXG5cdFx0aWYgKCF0aGlzLmFwcGVuZElubGluZSkge1xuXHRcdFx0dGhpcy5hZGRTY3JvbGxFdmVudExpc3RlbmVyKCk7XG5cdFx0XHR0aGlzLl9hcHBlbmRUb0JvZHkoKTtcblx0XHR9XG5cblx0XHQvLyBzZXQgdGhlIGRyb3Bkb3duIG1lbnUgdG8gZHJvcCB1cCBpZiBpdCdzIG5lYXIgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXG5cdFx0Ly8gc2V0VGltZW91dCBsZXRzIHVzIG1lYXN1cmUgYWZ0ZXIgaXQncyB2aXNpYmxlIGluIHRoZSBET01cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IG1lbnUgPSB0aGlzLmRyb3Bkb3duTWVudS5uYXRpdmVFbGVtZW50O1xuXHRcdFx0Y29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0aWYgKGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gbWluIGhlaWdodCBvZiAxMDBweFxuXHRcdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IC0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCA+IDEwMCkge1xuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgY29uZGl0aW9uYWwgb25jZSB0aGlzIGFwaSBpcyBzZXR0bGVkIGFuZCBwYXJ0IG9mIGFic3RyYWN0LWRyb3Bkb3duLXZpZXcuY2xhc3Ncblx0XHRcdFx0XHRpZiAodGhpcy52aWV3W1wiZW5hYmxlU2Nyb2xsXCJdKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdbXCJlbmFibGVTY3JvbGxcIl0oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kcm9wVXAgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRyb3BVcCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sIDApO1xuXG5cdFx0Ly8gd2UgYmluZCBub29wIHRvIGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQgdG8gYWxsb3cgc2FmYXJpIHRvIGZpcmUgZXZlbnRzXG5cdFx0Ly8gZnJvbSBkb2N1bWVudC4gVGhlbiB3ZSB1bmJpbmQgZXZlcnl0aGluZyBsYXRlciB0byBrZWVwIHRoaW5ncyBsaWdodC5cblx0XHRkb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm5vb3AsIHRydWUpO1xuXHRcdGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5ub29wLCB0cnVlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub3V0c2lkZUtleSwgdHJ1ZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnZpZXcuaW5pdEZvY3VzKCksIDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbGxhcHNpbmcgdGhlIGRyb3Bkb3duIG1lbnUgYW5kIHJlbW92aW5nIHVubmVjZXNzYXJ5IGBFdmVudExpc3RlbmVyc2AuXG5cdCAqL1xuXHRjbG9zZU1lbnUoKSB7XG5cdFx0Ly8gcmV0dXJuIGVhcmx5IGlmIHRoZSBtZW51IGlzIGFscmVhZHkgY2xvc2VkXG5cdFx0aWYgKHRoaXMubWVudUlzQ2xvc2VkKSB7IHJldHVybjsgfVxuXHRcdHRoaXMubWVudUlzQ2xvc2VkID0gdHJ1ZTtcblx0XHR0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuXHRcdHRoaXMuY2xvc2UuZW1pdCgpO1xuXG5cdFx0Ly8gZm9jdXMgdGhlIHRyaWdnZXIgYnV0dG9uIHdoZW4gd2UgY2xvc2UgLi4uXG5cdFx0dGhpcy5kcm9wZG93bkJ1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cblx0XHQvLyByZW1vdmUgdGhlIGNvbmRpdGlvbmFsIG9uY2UgdGhpcyBhcGkgaXMgc2V0dGxlZCBhbmQgcGFydCBvZiBhYnN0cmFjdC1kcm9wZG93bi12aWV3LmNsYXNzXG5cdFx0aWYgKHRoaXMudmlld1tcImRpc2FibGVTY3JvbGxcIl0pIHtcblx0XHRcdHRoaXMudmlld1tcImRpc2FibGVTY3JvbGxcIl0oKTtcblx0XHR9XG5cblx0XHQvLyBtb3ZlIHRoZSBsaXN0IGJhY2sgaW4gdGhlIGNvbXBvbmVudCBvbiBjbG9zZVxuXHRcdGlmICghdGhpcy5hcHBlbmRJbmxpbmUpIHtcblx0XHRcdHRoaXMucmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpO1xuXHRcdFx0dGhpcy5fYXBwZW5kVG9Ecm9wZG93bigpO1xuXHRcdH1cblx0XHRkb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm5vb3AsIHRydWUpO1xuXHRcdGRvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5ub29wLCB0cnVlKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vdXRzaWRlQ2xpY2ssIHRydWUpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub3V0c2lkZUtleSwgdHJ1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkIHNjcm9sbCBldmVudCBsaXN0ZW5lciBpZiBzY3JvbGxhYmxlQ29udGFpbmVyIGlzIHByb3ZpZGVkXG5cdCAqL1xuXHRhZGRTY3JvbGxFdmVudExpc3RlbmVyKCkge1xuXHRcdGxldCBzY3JvbGxPYnNlcnZhYmxlID0gc2Nyb2xsYWJsZVBhcmVudHNPYnNlcnZhYmxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRpZiAodGhpcy5zY3JvbGxhYmxlQ29udGFpbmVyKSB7XG5cdFx0XHRjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNjcm9sbGFibGVDb250YWluZXIpO1xuXG5cdFx0XHRpZiAoY29udGFpbmVyKSB7XG5cdFx0XHRcdHNjcm9sbE9ic2VydmFibGUgPSBtZXJnZShzY3JvbGxPYnNlcnZhYmxlLCBmcm9tRXZlbnQoY29udGFpbmVyLCBcInNjcm9sbFwiKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2Nyb2xsID0gc2Nyb2xsT2JzZXJ2YWJsZS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGlzVmlzaWJsZUluQ29udGFpbmVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG5cdFx0XHRcdHRoaXMuZHJvcGRvd25TZXJ2aWNlLnVwZGF0ZVBvc2l0aW9uKHRoaXMuZHJvcGRvd25CdXR0b24ubmF0aXZlRWxlbWVudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgYW55IGBFdmVudExpc3RlbmVyc2AgcmVzcG9uc2libGUgZm9yIHNjcm9sbCBmdW5jdGlvbmFsaXR5LlxuXHQgKi9cblx0cmVtb3ZlU2Nyb2xsRXZlbnRMaXN0ZW5lcigpIHtcblx0XHRpZiAodGhpcy5zY3JvbGwpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRyb2xzIHRvZ2dsaW5nIG1lbnUgc3RhdGVzIGJldHdlZW4gb3Blbi9leHBhbmRlZCBhbmQgY2xvc2VkL2NvbGxhcHNlZC5cblx0ICovXG5cdHRvZ2dsZU1lbnUoKSB7XG5cdFx0aWYgKHRoaXMubWVudUlzQ2xvc2VkKSB7XG5cdFx0XHR0aGlzLm9wZW5NZW51KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGlzVGVtcGxhdGUodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcblx0fVxufVxuIl19