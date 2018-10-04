import { EventEmitter, ElementRef, OnInit, AfterContentInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { AbstractDropdownView } from "./abstract-dropdown-view.class";
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
export declare class Dropdown implements OnInit, AfterContentInit, OnDestroy {
    private elementRef;
    private translate;
    /**
     * Value displayed if no item is selected.
     * @memberof Dropdown
     */
    placeholder: string;
    /**
     * The selected value from the `Dropdown`.
     * @memberof Dropdown
     */
    displayValue: string;
    /**
     * Size to render the dropdown field.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {("sm" | "md" | "default" | "lg")}
     * @memberof Dropdown
     */
    size: "sm" | "md" | "default" | "lg";
    /**
     * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
     * item selection.
     * @type {("single" | "multi")}
     * @memberof Dropdown
     */
    type: "single" | "multi";
    /**
     * Set to `true` to disable the dropdown.
     * @memberof Dropdown
     */
    disabled: boolean;
    /**
     * Set to `true` if the `Dropdown` is to be appended to the DOM body.
     * @type {boolean}
     * @memberof Dropdown
     */
    appendToBody: boolean;
    /**
     * Query string for the element that contains the `Dropdown`.
     * Used to trigger closing the dropdown if it scrolls outside of the viewport of the `scrollableContainer`.
     * @type {string}
     * @memberof Dropdown
     */
    scrollableContainer: string;
    /**
     * Emits selection events.
     * @type {EventEmitter<Object>}
     * @memberof Dropdown
     */
    selected: EventEmitter<Object>;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     * @type {EventEmitter<any>}
     * @memberof Dropdown
     */
    onClose: EventEmitter<any>;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     * @type {EventEmitter<any>}
     * @memberof Dropdown
     */
    close: EventEmitter<any>;
    /**
     * Maintains a reference to the `AbstractDropdownView` object within the content DOM.
     * @type {AbstractDropdownView}
     * @memberof Dropdown
     */
    view: AbstractDropdownView;
    /**
     * Maintains a reference to the view DOM element of the `Dropdown` button.
     * @memberof Dropdown
     */
    dropdownButton: any;
    /**
     * ViewChid of the dropdown view.
     */
    dropdownMenu: any;
    /**
     * Set to `true` if the dropdown is closed (not expanded).
     * @memberof Dropdown
     */
    menuIsClosed: boolean;
    /**
     * controls wether the `drop-up` class is applied
     */
    dropUp: boolean;
    /**
     * Used by the various appendToX methods to keep a reference to our wrapper div
     */
    dropdownWrapper: HTMLElement;
    noop: any;
    outsideClick: any;
    outsideKey: any;
    keyboardNav: any;
    /**
     * Maintains an Event Observable Subscription for tracking window resizes.
     * Window resizing is tracked if the `Dropdown` is appended to the body, otherwise it does not need to be supported.
     * @memberof Dropdown
     */
    resize: Subscription;
    /**
     *  Maintians an Event Observable Subscription for tracking scrolling within the open `Dropdown` list.
     * @memberof Dropdown
     */
    scroll: Subscription;
    private onTouchedCallback;
    /**
     * Creates an instance of Dropdown.
     * @param {ElementRef} elementRef
     * @param {TranslateService} translate
     * @memberof Dropdown
     */
    constructor(elementRef: ElementRef, translate: TranslateService);
    /**
     * Updates the `type` property in the `@ContentChild`.
     * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
     * @memberof Dropdown
     */
    ngOnInit(): void;
    /**
     * Initializes classes and subscribes to events for single or multi selection.
     * @memberof Dropdown
     */
    ngAfterContentInit(): void;
    /**
     * Removing the `Dropdown` from the body if it is appended to the body.
     * @memberof Dropdown
     */
    ngOnDestroy(): void;
    /**
     * Build the style classes based on the size property of the `Dropdown`.
     * @returns {string}
     * @memberof Dropdown
     */
    buildClass(): "dropdown" | "dropdown--sm" | "dropdown--lg";
    /**
     * Propagates the injected `value`.
     * @param {*} value
     * @memberof Dropdown
     */
    writeValue(value: any): void;
    onBlur(): void;
    registerOnChange(fn: any): void;
    /**
     * Registering the function injected to control the touch use of the `Dropdown`.
     * @param {*} fn
     * @memberof Dropdown
     */
    registerOnTouched(fn: any): void;
    propagateChange: (_: any) => void;
    /**
     * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
     * @param {KeyboardEvent} ev
     * @returns null
     * @memberof Dropdown
     */
    onKeyDown(event: KeyboardEvent): void;
    closedDropdownNavigation(event: any): void;
    /**
     * Returns the display value if there is no selection, otherwise the selection will be returned.
     * @returns
     * @memberof Dropdown
     */
    getDisplayValue(): Observable<any>;
    /**
     * Returns `true` if there is a value selected.
     * @returns {boolean}
     * @memberof Dropdown
     */
    valueSelected(): boolean;
    _noop(): void;
    /**
     * Handles clicks outside of the `Dropdown`.
     * @param {any} event
     * @memberof Dropdown
     */
    _outsideClick(event: any): void;
    _outsideKey(event: any): void;
    /**
     * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
     * @param {KeyboardEvent} ev
     * @memberof Dropdown
     */
    _keyboardNav(event: KeyboardEvent): void;
    /**
     * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
     * @memberof Dropdown
     */
    _appendToDropdown(): void;
    /**
     * Creates the `Dropdown` list as an element that is appended to the DOM body.
     * @memberof Dropdown
     */
    _appendToBody(): void;
    /**
     * Expands the dropdown menu in the view.
     * @memberof Dropdown
     */
    openMenu(): void;
    /**
     * Collapsing the dropdown menu and removing unnecessary `EventListeners`.
     * @memberof Dropdown
     */
    closeMenu(): void;
    /**
     * Add scroll event listenter if scrollableContainer is provided
     * @memberof Dropdown
     */
    addScrollEventListener(): void;
    /**
     * Removes any `EventListeners` responsible for scroll functionality.
     * @memberof Dropdown
     */
    removeScrollEventListener(): void;
    /**
     * Controls toggling menu states between open/expanded and closed/collapsed.
     * @memberof Dropdown
     */
    toggleMenu(): void;
    /**
     * Returns `true` if the `elem` is visible within the `container`.
     * @param {any} elem
     * @param {any} container
     * @returns {boolean}
     * @memberof Dropdown
     */
    isVisibleInContainer(elem: any, container: any): boolean;
}
