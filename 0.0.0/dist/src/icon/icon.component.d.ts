import { ElementRef, AfterViewInit } from "@angular/core";
import { IconService } from "./icon.service";
import { Subscription } from "rxjs";
import { SizeMap } from "./icon.types";
/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
export declare class Icon implements AfterViewInit {
    protected elementRef: ElementRef;
    protected iconService: IconService;
    /** follows the naming convention found in the icon listing on the demo page */
    icon: string;
    /** accepts color strings */
    color: "blue" | "light" | "dark" | "white";
    /** accepts abbreviated size strings */
    size: "xs" | "sm" | "md" | "lg";
    /** map size strings to numeric values */
    protected sizeMap: SizeMap;
    /**
     * Pass down `classList` from host element.
     */
    readonly classList: any;
    protected spriteLoadingSubscription: Subscription;
    /**
     * Initialize the component
     *
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef, iconService: IconService);
    ngAfterViewInit(): void;
    /**
     * Create a class name based on @Input() `color` and `size`.
     */
    buildMatterClass(): string;
}
