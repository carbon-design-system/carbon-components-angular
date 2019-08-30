import { ElementRef, EventEmitter, AfterViewInit } from "@angular/core";
/**
 * `OverflowMenuOption` represents a single option in an overflow menu
 *
 * Presently it has three possible states - normal, disabled, and danger:
 * ```
 * <ibm-overflow-menu-option>Simple option</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
 * ```
 *
 * For content that expands beyond the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
export declare class OverflowMenuOption implements AfterViewInit {
    protected elementRef: ElementRef;
    optionClass: string;
    role: string;
    readonly isDanger: Boolean;
    readonly isDisabled: Boolean;
    /**
     * toggles between `normal` and `danger` states
     */
    type: "normal" | "danger";
    /**
     * disable/enable interactions
     */
    disabled: boolean;
    href: string;
    selected: EventEmitter<any>;
    tabIndex: number;
    title: any;
    constructor(elementRef: ElementRef);
    onClick(): void;
    onFocus(): void;
    onBlur(): void;
    ngAfterViewInit(): void;
}
