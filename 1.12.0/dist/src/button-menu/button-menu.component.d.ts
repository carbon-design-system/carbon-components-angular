import { ButtonMenuItem } from "./button-menu-item.component";
import { EventEmitter, ElementRef, AfterContentInit, AfterViewInit, QueryList } from "@angular/core";
export declare class ButtonMenu implements AfterContentInit, AfterViewInit {
    private elementRef;
    /**
     * Value to show on the main button
     *
     * @memberof ButtonMenu
     */
    value: string;
    /**
     * Size of the button menu.
     *
     * `"sm"` | `"md"` | `"default"` | `"lg"`
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     *
     * @type {("sm" | "default" | "md" | "lg")}
     * @memberof ButtonMenu
     */
    size: "sm" | "md" | "default" | "lg";
    /**
     * Primary or secondary button colors.
     *
     * `"primary"` | `"secondary"`
     *
     * @type {("primary" | "secondary")}
     * @memberof ButtonMenu
     */
    type: "primary" | "secondary";
    /**
     * Set to `true` to disable the button menu.
     *
     * @memberof ButtonMenu
     */
    disabled: boolean;
    appendToBody: boolean;
    scrollableContainer: string;
    close: EventEmitter<any>;
    /**
     * Emitted when main action button is clicked.
     *
     * Different from `click`, which is angular event.
     *
     * ```html
     * <ibm-button-menu
     *		value="Save"
     *		(onClick)="doSave()">
     *	</ibm-button-menu>
     * ```
     *
     * @type {EventEmitter<any>}
     * @memberof ButtonMenu
     */
    onClick: EventEmitter<any>;
    rootButton: any;
    mainButton: any;
    items: QueryList<ButtonMenuItem>;
    role: string;
    menuIsClosed: boolean;
    dropdown: HTMLElement;
    dropdownWrapper: HTMLElement;
    noop: any;
    outsideClick: any;
    outsideKey: any;
    keyboardNav: any;
    resize: any;
    scroll: any;
    private onTouchedCallback;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    buildClass(baseClass?: string): string;
    keyboardInput(event: KeyboardEvent): void;
    _noop(): void;
    _outsideClick(event: any): void;
    _outsideKey(event: any): void;
    _keyboardNav(event: KeyboardEvent): void;
    _appendToDropdown(): void;
    _appendToBody(): void;
    openMenu(): void;
    closeMenu(): void;
    addScrollEventListener(): void;
    removeScrollEventListener(): void;
    toggleMenu(): void;
    isVisibleInContainer(elem: any, container: any): boolean;
}
