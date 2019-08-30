import { ElementRef, AfterContentInit } from "@angular/core";
import { I18n, Overridable } from "./../i18n/i18n.module";
export interface ExpandableTileTranslations {
    EXPAND: string;
    COLLAPSE: string;
}
export declare class ExpandableTile implements AfterContentInit {
    protected i18n: I18n;
    protected elementRef: ElementRef;
    expanded: boolean;
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     *		"EXPAND": "Expand",
     *		"COLLAPSE": "Collapse",
     * }
     * ```
     */
    translations: ExpandableTileTranslations;
    tileMaxHeight: number;
    element: any;
    expand: Overridable;
    collapse: Overridable;
    constructor(i18n: I18n, elementRef: ElementRef);
    ngAfterContentInit(): void;
    readonly expandedHeight: number;
    updateMaxHeight(): void;
    onClick(): void;
}
