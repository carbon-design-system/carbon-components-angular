import { ElementRef, EventEmitter } from "@angular/core";
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
 * For content that expands beyod the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
export declare class OverflowMenuOption {
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
    selected: EventEmitter<any>;
    tabIndex: number;
    constructor(elementRef: ElementRef);
    onClick(event: any): void;
    /**
     * Returns true if the content string is longer than the width of the containing button
     *
     * note: getter ties into the view check cycle so we always get an accurate value
     */
    readonly titleEnabled: boolean;
    /**
     * Returns the text content projected into the component
     */
    readonly content: string;
}
