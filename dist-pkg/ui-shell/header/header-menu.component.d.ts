import { ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Dropdown menu container for navigation items.
 */
export declare class HeaderMenu {
    protected domSanitizer: DomSanitizer;
    protected elementRef: ElementRef;
    title: string;
    href: string;
    trigger: "click" | "mouseover";
    expanded: boolean;
    protected _href: string;
    constructor(domSanitizer: DomSanitizer, elementRef: ElementRef);
    onClick(): void;
    onMouseOver(): void;
    onMouseOut(): void;
    onFocusOut(event: any): void;
}
